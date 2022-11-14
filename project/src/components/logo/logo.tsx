import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants/constants';

type TLogoProps = {
  isMainPage: boolean;
}
function Logo({isMainPage}: TLogoProps): JSX.Element {
  return (
    <>
      {isMainPage &&
      <a className="header__logo-link header__logo-link--active">
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </a>}
      {!isMainPage &&
      <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </Link>}
    </>
  );
}

export default Logo;
