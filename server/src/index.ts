import express, {Express} from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import bodyParser from 'body-parser';

import keys from './config/keys';
import {PORT, COOKIE_SESSION_MAX_AGE} from './constants';
import authRoutes from './routes/auth';
import billingRoutes from './routes/billingRoutes';

import './models/User';
import './services/passport';

mongoose.connect(keys.mongoURI);

const app: Express = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: COOKIE_SESSION_MAX_AGE,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);

app.listen(PORT);
