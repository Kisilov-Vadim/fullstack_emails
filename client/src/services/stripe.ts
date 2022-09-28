import {Token} from 'react-stripe-checkout';

import requests from './requests';
import {User} from '../store/auth/type';

const handleToken = async (token: Token): Promise<User> =>
  requests.post('/api/stripe', {token});

export const stripeService = {
  handleToken,
};
