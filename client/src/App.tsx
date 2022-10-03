import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {authActions} from './store/auth';
import {useAppDispatch} from './hooks/useAppDispatch';
import {Header, Landing, Dashboard, SurveyNew} from './components';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authActions.fetchUser());
  }, [dispatch]);

  return (
    <div className="container">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/surveys" element={<Dashboard />} />
          <Route path="/surveys/new" element={<SurveyNew />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
