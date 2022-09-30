import passport from 'passport';
import {Express} from 'express';

import {PassportAuthenticateStrategies, RoutesPaths} from './constants';

export default (app: Express) => {
  app.get(
    RoutesPaths.authGoogle,
    passport.authenticate(PassportAuthenticateStrategies.google, {
      scope: ['profile', 'email'],
    })
  );

  app.get(
    RoutesPaths.authGoogleCallback,
    passport.authenticate(PassportAuthenticateStrategies.google),
    (req, res) => res.redirect('/surveys')
  );

  app.get(RoutesPaths.apiLogout, (req, res) => {
    req.logout({}, () => {});
    res.redirect('/');
  });

  app.get(RoutesPaths.apiCurrentUser, (req, res) => {
    res.send(req.user);
  });
};
