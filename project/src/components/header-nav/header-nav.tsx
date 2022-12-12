import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants/constants';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {logoutAction} from '../../store/api-actions';
import {memo} from 'react';

type THeaderNavProps = {
  isAuth: boolean;
  userEmail: string;
}

function HeaderNav({isAuth, userEmail}: THeaderNavProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleLogoutClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuth &&
          <>
            <li className="header__nav-item user">
              <div className="header__nav-profile">
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__user-name user__name">{userEmail}</span>
              </div>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#" onClick={handleLogoutClick}>
                <span className="header__signout">Sign out</span>
              </a>
            </li>
          </>}
        {!isAuth &&
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>}
      </ul>
    </nav>
  );
}

export default memo(HeaderNav);
