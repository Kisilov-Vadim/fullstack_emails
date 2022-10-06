import {User} from '../store/auth/type';

import requests from './requests';

export type SurveyFormData = {
  title: string;
  subject: string;
  body: string;
  recipients: string;
};

const getSurveys = async (): Promise<any> => requests.get('/api/surveys');

const sendSurveys = async (data: SurveyFormData): Promise<User> =>
  requests.post('/api/surveys', {...data});

export const surveyService = {
  getSurveys,
  sendSurveys,
};
