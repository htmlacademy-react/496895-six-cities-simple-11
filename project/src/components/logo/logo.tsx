import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants/constants';
import { memo } from 'react';

type TLogoProps = {
  isMainScreen: boolean;
}
function Logo({isMainScreen}: TLogoProps): JSX.Element {
  return (
    <>
      {isMainScreen &&
      <a className="header__logo-link header__logo-link--active">
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </a>}
      {!isMainScreen &&
      <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </Link>}
    </>
  );
}

export default memo(Logo);
