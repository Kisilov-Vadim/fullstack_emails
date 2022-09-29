import mongoose from 'mongoose';
import passport from 'passport';
import bodyParser from 'body-parser';
import express, {Express} from 'express';
import cookieSession from 'cookie-session';

import keys from './config/keys';
import authRoutes from './routes/auth';
import billingRoutes from './routes/billingRoutes';
import {PORT, COOKIE_SESSION_MAX_AGE} from './constants';

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

if (process.env.NODE_ENV === 'production') {
  const path = require('path');

  app.use(express.static('../../client/build'));
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '../../client', 'build', 'index.html')
    );
  });
}

app.listen(PORT);
