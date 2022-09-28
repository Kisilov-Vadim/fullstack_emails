import {configureStore} from '@reduxjs/toolkit';

import {StoreReducers} from './types';

import {authReducer} from './auth';

export const store = configureStore({
  reducer: {
    [StoreReducers.auth]: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
