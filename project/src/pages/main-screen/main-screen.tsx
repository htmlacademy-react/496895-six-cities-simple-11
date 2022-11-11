import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import NoPlaces from '../../components/no-places/no-places';
import {Offer} from '../../types/types';

type MainScreenProps = {
  offers: Offer[];
  isOffersEmpty: boolean;
}

function MainScreen({offers, isOffersEmpty}: MainScreenProps): JSX.Element {
  return (
    <>
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

      <div className="cities">
        <div className={`cities__places-container ${isOffersEmpty ? 'cities__places-container--empty ' : ''}container`}>
          {isOffersEmpty ? <NoPlaces /> : <OffersList offers={offers} />}
          <div className="cities__right-section">
            {!isOffersEmpty && <Map />}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainScreen;
