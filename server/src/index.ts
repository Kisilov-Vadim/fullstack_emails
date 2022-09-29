import mongoose from 'mongoose';
import passport from 'passport';
import bodyParser from 'body-parser';
import express, {Express} from 'express';
import cookieSession from 'cookie-session';

import keys from './config/keys';
import routes from './routes';
import {PORT, COOKIE_SESSION_MAX_AGE} from './constants';

import './models';
import './services';

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

routes(app);

app.listen(PORT);
