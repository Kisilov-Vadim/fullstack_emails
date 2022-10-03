import React, {useCallback, useState} from 'react';

import {SurveyForm, SurveyReview} from './components';

export const SurveyNew = () => {
  const [showReview, setShowReview] = useState(false);

  const onSurveySubmit = useCallback(() => {
    setShowReview(true);
  }, []);

  const onCancel = useCallback(() => {
    setShowReview(false);
  }, []);

  if (showReview) return <SurveyReview onCancel={onCancel} />;

  return <SurveyForm onSurveySubmit={onSurveySubmit} />;
};
