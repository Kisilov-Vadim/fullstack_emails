import {configureStore} from '@reduxjs/toolkit';

import {StoreReducers} from './types';
import {authReducer} from './auth';
import {surveysReducer} from './surveys';
import {reduxFormReducer} from './reduxForm';

export const store = configureStore({
  reducer: {
    [StoreReducers.auth]: authReducer,
    [StoreReducers.reduxForm]: reduxFormReducer,
    [StoreReducers.surveys]: surveysReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
