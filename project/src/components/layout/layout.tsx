import {Outlet, useLocation} from 'react-router-dom';
import Header from './../header/header';
import {MainElClassName, PageElClassName, AppRoute} from './../../constants/constants';
import { useAppSelector } from '../../hooks/useAppSelector';
import { isAuthorized } from '../../utils';
import { memo } from 'react';

type TLayoutProps = {
  isOffersEmpty: boolean;
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

function Layout({isOffersEmpty}: TLayoutProps): JSX.Element {
  const {pathname} = useLocation();
  const isMainScreen = pathname === AppRoute.Root;

  const {authorizationStatus} = useAppSelector((state) => state);
  const isAuth = isAuthorized(authorizationStatus);

  const mainElClassName = isOffersEmpty ? MainElClassName.MainEmpty : getElementClassName(isAuth, MainElClassName, pathname);

  const pageElClassName = getElementClassName(isAuth, PageElClassName, pathname);

  return (
    <div className={pageElClassName}>
      <Header isMainScreen={isMainScreen} />

      <main className={mainElClassName}>
        <Outlet />
      </main>
    </div>
  );
}

export default memo(Layout);
