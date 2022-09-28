import React from 'react';

import {User} from '../../store/auth/type';

import {Payments} from '../Payments';

type RightSideContentProps = {
  user?: User;
};

const RightSideContent = ({user}: RightSideContentProps) => {
  if (user) {
    return (
      <>
        <li key="1">
          <Payments />
        </li>
        <li key="2" style={{margin: '0 10px'}}>
          Credits:
          {user.credits}
        </li>
        <li key="3">
          <a href="/api/logout">Logout</a>
        </li>
      </>
    );
  }

  return (
    <li>
      <a href="/auth/google">Login With Google</a>
    </li>
  );
};

export default RightSideContent;
