import {Profile, VerifyCallback} from "passport-google-oauth20";
const mongoose = require('mongoose');

const User = mongoose.model('users');

const passportCallback = async (
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: VerifyCallback
) => {
  const googleId = profile.id;

  let dbUser = await User.findOne({googleId});

  if (!dbUser) {
    dbUser = await new User({googleId}).save();
  }

  done(null, dbUser);
}

const serializeUser = (user, done) => done(null, user.id);

const deserializeUser = async (id, done) => {
  const dbUser = await User.findById(id);
  done(null, dbUser);
};

module.exports = {
  passportCallback,
  serializeUser,
  deserializeUser,
}