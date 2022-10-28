import MainScreen from '../../pages/main-screen/main-screen';
import {Offer} from '../../types/types';

type AppProps = {
  offers: Offer[];
}

function App(props: AppProps): JSX.Element {
  return (
    <MainScreen offers={props.offers} />
  );
}

export default App;
