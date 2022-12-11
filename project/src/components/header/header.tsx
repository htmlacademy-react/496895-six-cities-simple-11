import Logo from '../logo/logo';
import HeaderNav from '../header-nav/header-nav';
import { memo } from 'react';

type THeaderProps = {
  isMainScreen: boolean;
}

function Header({isMainScreen}: THeaderProps): JSX.Element {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isMainScreen={isMainScreen} />
          </div>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
