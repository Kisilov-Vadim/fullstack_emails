import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

import {useAppSelector} from '../../../../hooks/useAppSelector';
import {authActions} from '../../../../store/auth';
import {useAppDispatch} from '../../../../hooks/useAppDispatch';
import {SurveyFormData} from '../../../../services';
import {
  reduxFormActions,
  selectFormDataByName,
} from '../../../../store/reduxForm';

import {FIELDS} from '../../constants';

type SurveyReviewProps = {
  onCancel: () => void;
};

export const SurveyReview = ({onCancel}: SurveyReviewProps) => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const formData = useAppSelector(selectFormDataByName)('survey');

  const onSubmit = useCallback(async () => {
    dispatch(authActions.postSurvey(formData as SurveyFormData));

    navigate('/surveys');
    dispatch(reduxFormActions.clearFormData('survey'));
  }, [dispatch, formData, navigate]);

  return (
    <div>
      <h5>Please confirm your entries</h5>

      <div style={{margin: '50px 0px'}}>
        {FIELDS.map(({name, label}) => (
          <div style={{marginBottom: 20}}>
            <p style={{color: 'grey', fontSize: 20, margin: 0}}>{label}</p>
            <p style={{fontSize: 24, margin: 0}}>
              {formData?.[name] || ''}
            </p>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="yellow darken-3 btn-flat white-text"
        onClick={onCancel}
      >
        Back
      </button>

      <button
        type="button"
        className="green btn-flat right white-text"
        onClick={onSubmit}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};
