import Layout from './../layout/layout';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import {TReview} from '../../types/types';
import {AppRoute} from '../../constants/constants';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/useAppSelector';

type TAppProps = {
  reviews: TReview[];
}

function App(props: TAppProps): JSX.Element {
  const isAuth = useAppSelector((state) => state.isAuth);
  const offersByCurrentCity = useAppSelector((state) => state.offersByCurrentCity);
  const isOffersEmpty = offersByCurrentCity.length === 0;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout isOffersEmpty={isOffersEmpty} />}>
          <Route index element={<MainScreen isOffersEmpty={isOffersEmpty} />} />
          <Route path={AppRoute.Login} element={isAuth ? <Navigate to={AppRoute.Root} /> : <LoginScreen />} />
          <Route path={`${AppRoute.Room}/:id`} element={<RoomScreen reviews={props.reviews} />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
