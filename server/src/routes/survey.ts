/* eslint-disable @typescript-eslint/ban-ts-comment */
import {Express} from 'express';
import mongoose from 'mongoose';

import {sendMailer} from '../services';
import {surveyTemplate} from '../services/emailTemplates';
import {requireCredits, requireLogin} from '../middlewares';

import {RoutesPaths} from './constants';

export default (app: Express) => {
  const Survey = mongoose.model('surveys');

  app.get(RoutesPaths.apiSurveysThanks, (_, res) => {
    res.send('Thanks for voting');
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
