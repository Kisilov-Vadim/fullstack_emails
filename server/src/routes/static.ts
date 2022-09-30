import express, {Express} from 'express';

import {RoutesPaths} from './constants';

export default (app: Express) => {
  if (process.env.NODE_ENV === 'production') {
    const path = require('path');

    app.use(express.static('../client/build'));

    app.get(RoutesPaths.staticHtml, (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '../../../client', 'build', 'index.html')
      );
    });
  }
};
