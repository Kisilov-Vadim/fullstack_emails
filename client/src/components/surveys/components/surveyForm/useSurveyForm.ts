import {ChangeEvent, useCallback} from 'react';

import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {ReduxForms} from '../../../../store/reduxForm/types';
import {
  reduxFormActions,
  selectFormDataByName,
} from '../../../../store/reduxForm';

export type SurveyFormProps = {
  onSurveySubmit: () => void;
};

const useSurveyForm = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(selectFormDataByName)('survey');

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(
        reduxFormActions.setFormData({
          formName: ReduxForms.survey,
          fieldName: e.target.name,
          value: e.target.value,
        })
      );
    },
    [dispatch]
  );

  return {
    formData,
    onChange,
  };
};

export default useSurveyForm;
