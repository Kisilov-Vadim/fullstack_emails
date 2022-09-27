import express, {Express} from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';

import keys from './config/keys';
import {PORT, COOKIE_SESSION_MAX_AGE} from './constants';
import authRoutes from './routes/auth';

import './models/User';
import './services/passport';

mongoose.connect(keys.mongoURI);

const app: Express = express();

app.use(cookieSession({
  maxAge: COOKIE_SESSION_MAX_AGE,
  keys: [keys.cookieKey],
}))

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

app.listen(PORT);
