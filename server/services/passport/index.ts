const passport = require('passport');
const {Strategy: GoogleStrategy} = require('passport-google-oauth20');

const {
  googleClientID,
  googleClientSecret
} = require('../../config/keys');

const {
  passportCallback,
  serializeUser,
  deserializeUser,
} = require('./utils');

passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    passportCallback,
  )
);

export {};