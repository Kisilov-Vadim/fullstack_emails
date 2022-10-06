import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '..';
import {StoreReducers} from '../types';

import {fetchSurveys} from './actions';
import {SurveysState} from './types';

const initialState: SurveysState = {
  isLoading: true,
  error: undefined,
};

const surveysSlice = createSlice({
  name: StoreReducers.surveys,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSurveys.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchSurveys.fulfilled, (state, {payload}) => {
      state.data = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchSurveys.rejected, (state, {error}) => {
      state.error = error;
      state.isLoading = false;
    });
  },
});

export const selectSurveys = (state: RootState) => state.surveys.data;
export const selectSurveysState = (state: RootState) => state.surveys;

const surveysReducer = surveysSlice.reducer;
const surveysActions = {...surveysSlice.actions, fetchSurveys};

export {surveysActions, surveysReducer};
