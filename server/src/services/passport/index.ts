import passport from 'passport';
import {Strategy as GoogleStrategy} from 'passport-google-oauth20';

import keys from '../../config/keys';

import {
  passportCallback,
  serializeUser,
  deserializeUser,
} from './utils';

passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    passportCallback,
  )
);
