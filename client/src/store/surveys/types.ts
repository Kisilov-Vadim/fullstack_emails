import {SerializedError} from '@reduxjs/toolkit';

export type SurveysState = {
  isLoading: boolean;
  error?: SerializedError;
  data?: any[];
};

export enum SurveysThunkTypePrefixes {
  surveysFetch = 'surveys/fetch',
}
