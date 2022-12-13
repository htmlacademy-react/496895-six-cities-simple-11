import Layout from './../layout/layout';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import {AppRoute} from '../../constants/constants';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/useAppSelector';
import {isAuthorized} from '../../utils';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getOffersByCurrentCity } from '../../store/offers-process/selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = isAuthorized(authorizationStatus);
  const offersByCurrentCity = useAppSelector(getOffersByCurrentCity);
  const isOffersEmpty = offersByCurrentCity.length === 0;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout isOffersEmpty={isOffersEmpty} />}>
          <Route index element={<MainScreen />} />
          <Route path={AppRoute.Login} element={isAuth ? <Navigate to={AppRoute.Root} /> : <LoginScreen />} />
          <Route path={`${AppRoute.Room}/:id`} element={<RoomScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
