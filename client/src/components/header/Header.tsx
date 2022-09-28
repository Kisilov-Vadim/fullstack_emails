import React from 'react';
import {Link} from 'react-router-dom';

import {selectAuthUser} from '../../store/auth';
import {useAppSelector} from '../../hooks/useAppSelector';

import RightSideContent from './RightSideContent';

export const Header = () => {
  const user = useAppSelector(selectAuthUser);

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={user ? '/surveys' : '/'} className="brand-logo">
          Emaily
        </Link>

        <ul className="right hide-on-med-and-down">
          <RightSideContent user={user} />
        </ul>
      </div>
    </nav>
  );
};
