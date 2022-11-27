import OffersList from '../../components/offers-list/offers-list';
import LocationList from '../../components/locations-list/locations-list';
import Map from '../../components/map/map';
import NoPlaces from '../../components/no-places/no-places';
import Loading from '../../components/loading/loading';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {fetchOffersAction} from '../../store/api-actions';

import {useEffect, useState} from 'react';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  const [id, setCardId] = useState(0);
  const currentCityName = useAppSelector((state) => state.currentCityName);
  const offersByCurrentCity = useAppSelector((state) => state.offersByCurrentCity);
  const offers = useAppSelector((state) => state.offers);
  const isOffersEmpty = offersByCurrentCity.length === 0;

  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  const cardMouseOverHandler = (cardId: number) => {
    setCardId(cardId);
  };

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, []);

  if (isOffersDataLoading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationList currentCityName={currentCityName} />
      </div>

      <div className="cities">
        <div className={`cities__places-container ${isOffersEmpty ? 'cities__places-container--empty ' : ''}container`}>
          {isOffersEmpty ? <NoPlaces currentCityName={currentCityName} /> : <OffersList onCardHover={cardMouseOverHandler} offers={offersByCurrentCity} />}
          <div className="cities__right-section">
            {!isOffersEmpty && <Map offers={offers} selectedOffer={offersByCurrentCity.find((offer) => offer.id === id)} city={offersByCurrentCity[0].city} secondaryСlassName="cities__map" />}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainScreen;
