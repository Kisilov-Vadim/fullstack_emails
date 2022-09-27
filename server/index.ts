const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const {PORT, COOKIE_SESSION_MAX_AGE} = require('./constants');
const {mongoURI, cookieKey} = require('./config/keys');
const authRoutes = require('./routes/auth');

require('./models/User');
require('./services/passport');

mongoose.connect(mongoURI);

const app = express();

app.use(cookieSession({
  maxAge: COOKIE_SESSION_MAX_AGE,
  keys: [cookieKey],
}))

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

app.listen(PORT);

export {};
