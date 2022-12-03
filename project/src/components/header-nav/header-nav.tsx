import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants/constants';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {logoutAction} from '../../store/api-actions';
import {isAuthorized} from '../../utils';

function HeaderNav(): JSX.Element {
  const dispatch = useAppDispatch();
  const {user, authorizationStatus} = useAppSelector((state) => state);
  const isAuth = isAuthorized(authorizationStatus);

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
                <span className="header__user-name user__name">{user ? user.email : ''}</span>
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
export default HeaderNav;
