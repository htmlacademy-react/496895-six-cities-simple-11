import Layout from './../layout/layout';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import {TOffer, TReview, TCity} from '../../types/types';
import {AppRoute} from '../../constants/constants';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

type TAppProps = {
  offers: TOffer[];
  nearbyOffers: TOffer[];
  reviews: TReview[];
  isAuth: boolean;
  city: TCity;
}

function App(props: TAppProps): JSX.Element {
  const isOffersEmpty = props.offers.length === 0;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout isAuth={props.isAuth} isOffersEmpty={isOffersEmpty} />}>
          <Route index element={<MainScreen city={props.city} offers={props.offers} isOffersEmpty={isOffersEmpty} />} />
          <Route path={AppRoute.Login} element={props.isAuth ? <Navigate to={AppRoute.Root} /> : <LoginScreen />} />
          <Route path={`${AppRoute.Room}/:id`} element={<RoomScreen reviews={props.reviews} offers={props.offers} nearbyOffers={props.nearbyOffers} isAuth={props.isAuth} />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
