import {Profile, VerifyCallback} from "passport-google-oauth20";
import mongoose from 'mongoose';

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

const serializeUser = (user: any, done: any) => done(null, user.id);

const deserializeUser = async (id: any, done: any) => {
  const dbUser = await User.findById(id);
  done(null, dbUser);
};

export {
  passportCallback,
  serializeUser,
  deserializeUser,
}