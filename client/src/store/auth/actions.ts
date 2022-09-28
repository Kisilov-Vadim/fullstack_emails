import {createAsyncThunk, SerializedError} from '@reduxjs/toolkit';
import {Token} from 'react-stripe-checkout';

import {authService} from '../../services/auth';
import {stripeService} from '../../services/stripe';

import {AuthThunkTypePrefixes, User} from './type';

const fetchUser = createAsyncThunk<
  User,
  undefined,
  {rejectValue: SerializedError}
>(AuthThunkTypePrefixes.userFetch, async () => authService.fetchUser());

const handleStripeToken = createAsyncThunk<
  User,
  Token,
  {rejectValue: SerializedError}
>(AuthThunkTypePrefixes.stripeToken, async (token) =>
  stripeService.handleToken(token)
);

export {fetchUser, handleStripeToken};
