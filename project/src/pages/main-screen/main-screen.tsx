import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import NoPlaces from '../../components/no-places/no-places';
import {TOffer, TCity} from '../../types/types';

import {useState} from 'react';

type TMainScreenProps = {
  offers: TOffer[];
  isOffersEmpty: boolean;
  city: TCity;
}

function MainScreen({offers, isOffersEmpty, city}: TMainScreenProps): JSX.Element {
  const [id, setCardId] = useState(0);

  const cardMouseOverHandler = (cardId: number) => {
    setCardId(cardId);
  };

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
          {isOffersEmpty ? <NoPlaces /> : <OffersList onCardHover={cardMouseOverHandler} offers={offers} />}
          <div className="cities__right-section">
            {!isOffersEmpty && <Map offers={offers} selectedOffer={offers.find((offer) => offer.id === id)} city={city} secondaryСlassName="cities__map" />}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainScreen;
