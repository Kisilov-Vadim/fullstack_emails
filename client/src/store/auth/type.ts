import {SerializedError} from '@reduxjs/toolkit';

export interface AuthState {
  isLoading: boolean;
  user?: User;
  error?: SerializedError;
}

export type User = {
  id: string;
  googleId: string;
};

export enum AuthThunkTypePrefixes {
  userFetch = 'user/fetch',
}
