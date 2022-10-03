import React from 'react';
import {Link} from 'react-router-dom';

import {InputField} from '../../..';

import {FIELDS} from '../../constants';

import useSurveyForm, {SurveyFormProps} from './useSurveyForm';

export const SurveyForm = (props: SurveyFormProps) => {
  const {onSurveySubmit} = props;

  const {formData, onChange} = useSurveyForm();

  return (
    <div>
      {FIELDS.map(({label, name}) => (
        <InputField
          label={label}
          value={(formData?.[name] ?? '') as string}
          name={name}
          onChange={onChange}
        />
      ))}

      <div>
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>

        <button
          className="teal btn-flat right white-text"
          type="submit"
          onClick={onSurveySubmit}
        >
          Submit
          <i className="material-icons right">done</i>
        </button>
      </div>
    </div>
  );
};
