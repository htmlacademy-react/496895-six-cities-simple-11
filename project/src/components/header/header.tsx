import Logo from '../logo/logo';
import HeaderNav from '../header-nav/header-nav';
import {memo} from 'react';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getUser} from '../../store/user-process/selectors';

type THeaderProps = {
  isMainScreen: boolean;
  isAuth: boolean;
}

function Header({isMainScreen, isAuth}: THeaderProps): JSX.Element {
  const user = useAppSelector(getUser);
  const email = user ? user.email : '';

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isMainScreen={isMainScreen} />
          </div>
          <HeaderNav isAuth={isAuth} userEmail={email} />
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
