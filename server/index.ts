const express = require('express');
const mongoose = require('mongoose');

const {PORT} = require('./constants');
const {mongoURI} = require('./config/keys');
const authRoutes = require('./routes/auth');

require('./models/User');
require('./services/passport');

mongoose.connect(mongoURI);

const app = express();

authRoutes(app);

app.listen(PORT);
