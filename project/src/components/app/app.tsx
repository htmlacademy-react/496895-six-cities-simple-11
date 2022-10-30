import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import {Offer} from '../../types/types';
import {AppRoute} from '../../constants/constants';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

type AppProps = {
  offers: Offer[];
  isAuth: boolean;
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen offers={props.offers} />} />
        <Route path={AppRoute.Login} element={props.isAuth ? <Navigate to={AppRoute.Root} /> : <LoginScreen />} />
        <Route path={`${AppRoute.Room}/:id`} element={<RoomScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
