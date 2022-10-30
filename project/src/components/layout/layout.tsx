import {Outlet} from 'react-router-dom';
import Header from './../header/header';
import {MainElClassName, PageElClassName, AppRoute} from './../../constants/constants';

type LayoutProps = {
  isOffersEmpty: boolean;
  isAuth: boolean;
}

function getMainElClassName(isAuth: boolean) : string {
  const pathname = window.location.pathname;

  switch(pathname) {
    case AppRoute.Root:
      return MainElClassName.Main;
    case AppRoute.Login:
      return isAuth ? MainElClassName.Main : MainElClassName.Login;
    default:
      return MainElClassName.Room;
  }
}

function getPageElClassName(isAuth: boolean) : string {
  const pathname = window.location.pathname;

  switch(pathname) {
    case AppRoute.Root:
      return PageElClassName.Main;
    case AppRoute.Login:
      return isAuth ? PageElClassName.Main : PageElClassName.Login;
    default:
      return PageElClassName.Room;
  }
}

function Layout({isOffersEmpty, isAuth}: LayoutProps): JSX.Element {
  const mainElClassName = isOffersEmpty ? MainElClassName.MainEmpty : getMainElClassName(isAuth);

  const pageElClassName = getPageElClassName(isAuth);

  return (
    <div className={pageElClassName}>
      <Header />

      <main className={mainElClassName}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
