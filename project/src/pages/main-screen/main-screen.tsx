import OffersList from '../../components/offers-list/offers-list';
import LocationList from '../../components/locations-list/locations-list';
import Map from '../../components/map/map';
import NoPlaces from '../../components/no-places/no-places';
import Loading from '../../components/loading/loading';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {fetchOffersAction} from '../../store/api-actions';
import {useEffect, useState} from 'react';
import {getCurrentCityName, getCurrentCitySortedOffers, getLoadingErrorStatus, getOffersDataLoadingStatus} from '../../store/offers-process/selectors';
import ErrorScreen from '../error-screen/error-screen';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const [id, setCardId] = useState(0);

  const currentCityName = useAppSelector(getCurrentCityName);
  const offersByCurrentCity = useAppSelector(getCurrentCitySortedOffers);
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);
  const hasLoadingError = useAppSelector(getLoadingErrorStatus);

  const isOffersEmpty = offersByCurrentCity.length === 0;

  const handleCardMouseOver = (cardId: number) => {
    setCardId(cardId);
  };

  const handleErrorButtonClick = () => {
    dispatch(fetchOffersAction());
  };

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, []);

  if (isOffersDataLoading) {
    return (
      <Loading />
    );
  }

  if (hasLoadingError) {
    return (
      <ErrorScreen handleButtonClick={handleErrorButtonClick} />);
  }

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationList currentCityName={currentCityName} />
      </div>

      <div className="cities">
        <div className={`cities__places-container ${isOffersEmpty ? 'cities__places-container--empty ' : ''}container`}>
          {isOffersEmpty ? <NoPlaces currentCityName={currentCityName} /> : <OffersList onCardHover={handleCardMouseOver} offers={offersByCurrentCity} />}
          <div className="cities__right-section">
            {!isOffersEmpty && <Map offers={offersByCurrentCity} selectedOffer={offersByCurrentCity.find((offer) => offer.id === id)} city={offersByCurrentCity[0].city} secondaryСlassName="cities__map" />}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainScreen;
