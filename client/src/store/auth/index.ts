import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '..';

import {StoreReducers} from '../types';

import {fetchUser, handleStripeToken} from './actions';
import {AuthState} from './type';

const initialState: AuthState = {
  isLoading: true,
  error: undefined,
};

const authSlice = createSlice({
  name: StoreReducers.auth,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, {payload}) => {
      state.user = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUser.rejected, (state, {error}) => {
      state.error = error;
      state.isLoading = false;
    });
    builder.addCase(handleStripeToken.fulfilled, (state, {payload}) => {
      state.user = payload;
    });
  },
});

export const selectAuthUser = (state: RootState) => state.auth.user;
export const selectAuthState = (state: RootState) => state.auth;

const authReducer = authSlice.reducer;
const authActions = {
  ...authSlice.actions,
  fetchUser,
  handleStripeToken,
};

export {authActions, authReducer};
