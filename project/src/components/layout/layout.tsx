import {Outlet, useLocation} from 'react-router-dom';
import Header from './../header/header';
import {MainElClassName, PageElClassName, AppRoute} from './../../constants/constants';

type LayoutProps = {
  isOffersEmpty: boolean;
  isAuth: boolean;
}

function getElementClassName(isAuth: boolean, enumeration: typeof PageElClassName | typeof MainElClassName) : string {
  const pathname = useLocation().pathname;

  switch(pathname) {
    case AppRoute.Root:
      return enumeration.Main;
    case AppRoute.Login:
      return isAuth ? enumeration.Main : enumeration.Login;
    default:
      return enumeration.Room;
  }
}

function Layout({isOffersEmpty, isAuth}: LayoutProps): JSX.Element {
  const mainElClassName = isOffersEmpty ? MainElClassName.MainEmpty : getElementClassName(isAuth, MainElClassName);

  const pageElClassName = getElementClassName(isAuth, PageElClassName);

  return (
    <div className={pageElClassName}>
      <Header isAuth={isAuth} />

      <main className={mainElClassName}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
