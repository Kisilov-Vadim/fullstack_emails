/* eslint-disable @typescript-eslint/ban-ts-comment */
import express, {Express} from 'express';

export default (app: Express) => {
  if (process.env.NODE_ENV === 'production') {
    const path = require('path');

    app.use(express.static('../client/build'));

    app.get('*', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '../../../client', 'build', 'index.html')
      );
    });
  }
};
