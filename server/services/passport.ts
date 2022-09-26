
import {Profile} from "passport-google-oauth20";

const passport = require('passport');
const mongoose = require('mongoose');
const {Strategy: GoogleStrategy} = require('passport-google-oauth20');

const {
  googleClientID,
  googleClientSecret
} = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken: string, refreshToken: string | undefined, profile: Profile) => {
      const googleId = profile.id;

      const existingUser = await User.findOne({googleId});

      !existingUser && new User({googleId}).save();
    }
  )
);

export {};