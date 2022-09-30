export enum PassportAuthenticateStrategies {
  google = 'google',
}

export enum RoutesPaths {
  // static
  staticHtml = '*',

  // google authenticate
  authGoogle = '/auth/google',
  authGoogleCallback = '/auth/google/callback',

  // api
  apiLogout = '/api/logout',
  apiCurrentUser = '/api/current_user',
  apiBillingStripe = '/api/stripe',
  apiSurveys = '/api/surveys',
  apiSurveysThanks = '/api/surveys/thanks',
}
