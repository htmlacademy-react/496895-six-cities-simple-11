import {AppRoute} from '../../constants/constants';
import Logo from '../logo/logo';
import HeaderNav from '../header-nav/header-nav';

type THeaderProps = {
  isAuth: boolean;
}

function Header({isAuth}: THeaderProps): JSX.Element {
  const isMainPage = window.location.pathname === AppRoute.Root;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isMainPage={isMainPage} />
          </div>
          <HeaderNav isAuth={isAuth} />
        </div>
      </div>
    </header>
  );
}

export default Header;
