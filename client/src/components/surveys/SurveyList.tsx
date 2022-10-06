/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import React, {useEffect} from 'react';

import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {selectSurveysState, surveysActions} from '../../store/surveys';

export const SurveyList = () => {
  const dispatch = useAppDispatch();
  const {isLoading, data} = useAppSelector(selectSurveysState);

  useEffect(() => {
    dispatch(surveysActions.fetchSurveys());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div style={{paddingTop: 20}}>
      {data?.map((survey) => (
        <div className="card blue-grey darken-1" key={survey._id}>
          <div className="card-content white-text">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Set On:
              {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>
              Yes:
              {survey.yes}
            </a>
            <a>
              No:
              {survey.no}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
