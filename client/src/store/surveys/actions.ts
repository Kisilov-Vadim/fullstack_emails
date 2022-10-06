import {createAsyncThunk, SerializedError} from '@reduxjs/toolkit';

import {surveyService} from '../../services';

import {SurveysThunkTypePrefixes} from './types';

const fetchSurveys = createAsyncThunk<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  undefined,
  {rejectValue: SerializedError}
>(SurveysThunkTypePrefixes.surveysFetch, async () =>
  surveyService.getSurveys()
);

export {fetchSurveys};
