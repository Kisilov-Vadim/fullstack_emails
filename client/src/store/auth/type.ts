import {SerializedError} from '@reduxjs/toolkit';

export interface AuthState {
  isLoading: boolean;
  user?: User;
  error?: SerializedError;
}

export type User = {
  id: string;
  googleId: string;
  credits: number;
};

export enum AuthThunkTypePrefixes {
  userFetch = 'user/fetch',
  stripeToken = 'user/stripe-token',
  sendSurvey = 'user/send-survey',
}
