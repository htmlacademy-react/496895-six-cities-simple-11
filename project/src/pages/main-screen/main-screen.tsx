import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import {Offer} from '../../types/types';

type MainScreenProps = {
  offers: Offer[];
}

function MainScreen({offers}: MainScreenProps): JSX.Element {
  const isOffersEmpty = offers.length === 0;
  const mainElClassName = 'page__main page__main page__main--index';
  const mainElEmptyClassName = 'page__main page__main page__main--index  page__main page__main--index-empty';

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={isOffersEmpty ? mainElClassName : mainElEmptyClassName}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>

        <OffersList offers={offers} isOffersEmpty={isOffersEmpty} />
      </main>
    </div>
  );
}

export default MainScreen;
