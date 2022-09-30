/* eslint-disable @typescript-eslint/ban-ts-comment */
import {Express} from 'express';
import Stripe from 'stripe';

import {requireLogin} from '../middlewares';
import keys from '../config/keys';

import {RoutesPaths} from './constants';

export default (app: Express) => {
  app.post(
    RoutesPaths.apiBillingStripe,
    requireLogin,
    async (req, res) => {
      const {
        user,
        body: {token},
      } = req;

      const stripe = new Stripe(keys.stripeSecretKey, {
        apiVersion: '2022-08-01',
      });

      const charge = await stripe.charges.create({
        amount: 500,
        currency: 'usd',
        description: '$5 dollars for 5 credits',
        source: token.id,
      });

      // @ts-ignore
      user.credits += 5;
      // @ts-ignore
      const dbUser = await user.save();

      res.send(dbUser);
    }
  );
};
