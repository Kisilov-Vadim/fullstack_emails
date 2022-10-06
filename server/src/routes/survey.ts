/* eslint-disable @typescript-eslint/ban-ts-comment */
import {Express} from 'express';
import mongoose from 'mongoose';
import {chain} from 'lodash';
import {Path} from 'path-parser';
import {URL} from 'url';

import {sendMailer} from '../services';
import {surveyTemplate} from '../services/emailTemplates';
import {requireCredits, requireLogin} from '../middlewares';

import {RoutesPaths} from './constants';

export default (app: Express) => {
  const Survey = mongoose.model('surveys');

  app.get(RoutesPaths.apiSurveys, requireLogin, async (req, res) => {
    // @ts-ignore
    const surveys = await Survey.find({_user: req.user.id}).select({
      recipients: false,
    });

    res.send(surveys);
  });

  app.get(`${RoutesPaths.apiSurveys}/:surveyId/:choice`, (req, res) => {
    res.send('Thanks for voting!');
  });

  app.post(RoutesPaths.apiSurveysWebhooks, (req, res) => {
    const p = new Path(`${RoutesPaths.apiSurveys}/:surveyId/:choice`);

    chain(req.body)
      .map(({email, url}) => {
        const match = p.test(new URL(url).pathname);

        return match
          ? {
              email: email,
              surveyId: match.surveyId,
              choice: match.choice,
            }
          : undefined;
      })
      .compact()
      .uniqBy((v) => [v.email, v.surveyId].join())
      .each(({surveyId, email, choice}) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: {email, responded: false},
            },
          },
          {
            $inc: {[choice]: 1},
            $set: {'recipients.$.responded': true},
            lastResponded: new Date(),
          }
        ).exec();
      })
      .value();

    res.send({});
  });

  app.post(
    RoutesPaths.apiSurveys,
    requireLogin,
    requireCredits,
    async (req, res) => {
      const {title, subject, body, recipients} = req.body;

      const survey = new Survey({
        title,
        subject,
        body,
        // @ts-ignore
        _user: req.user.id,
        dateSent: Date.now(),
        recipients: recipients
          .split(',')
          .map((email: string) => ({email: email.trim()})),
      });

      try {
        await sendMailer(survey, surveyTemplate(survey));
        await survey.save();
        // @ts-ignore
        req.user.credits -= 1;
        // @ts-ignore
        const user = await req.user.save();

        res.send(user);
      } catch (err) {
        res.status(422).send(err);
      }
    }
  );
};
