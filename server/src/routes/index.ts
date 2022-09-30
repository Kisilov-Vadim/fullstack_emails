import {Express} from 'express';

import authRoutes from './auth';
import billingRoutes from './billing';
import staticRoutes from './static';
import surveyRoutes from './survey';

export default (api: Express) => {
  authRoutes(api);
  billingRoutes(api);
  staticRoutes(api);
  surveyRoutes(api);
};
