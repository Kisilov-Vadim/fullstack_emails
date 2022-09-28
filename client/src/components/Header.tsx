import React from 'react';
import {Link} from 'react-router-dom';

import {User} from '../store/auth/type';
import {selectAuthUser} from '../store/auth';
import {useAppSelector} from '../hooks/useAppSelector';

type RightSideContentProps = {
  user?: User;
};
const RightSideContent = ({user}: RightSideContentProps) => {
  if (user) {
    return (
      <li>
        <a href="/api/logout">Logout</a>
      </li>
    );
  }

  return (
    <li>
      <a href="/auth/google">Login With Google</a>
    </li>
  );
};

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
