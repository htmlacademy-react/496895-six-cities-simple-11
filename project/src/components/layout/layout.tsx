import {Outlet, useLocation} from 'react-router-dom';
import Header from './../header/header';
import {MainElClassName, PageElClassName, AppRoute} from './../../constants/constants';

type LayoutProps = {
  isOffersEmpty: boolean;
  isAuth: boolean;
}

function getElementClassName(isAuth: boolean, routes: typeof PageElClassName | typeof MainElClassName, pathname: string) : string {
  switch(pathname) {
    case AppRoute.Root:
      return routes.Main;
    case AppRoute.Login:
      return isAuth ? routes.Main : routes.Login;
    default:
      return routes.Room;
  }
}

function Layout({isOffersEmpty, isAuth}: LayoutProps): JSX.Element {
  const {pathname} = useLocation();
  const mainElClassName = isOffersEmpty ? MainElClassName.MainEmpty : getElementClassName(isAuth, MainElClassName, pathname);

  const pageElClassName = getElementClassName(isAuth, PageElClassName, pathname);

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
