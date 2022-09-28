import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {Header, Landing} from './components';
import {useAppDispatch} from './hooks/useAppDispatch';
import {authActions} from './store/auth';

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
          <Route path="/" element={Landing} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
