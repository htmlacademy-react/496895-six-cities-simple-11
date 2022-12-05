import {useParams} from 'react-router-dom';
import {MAX_PHOTO_COUNT} from './../../constants/constants';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Rating from '../../components/rating/rating';
import ReviewsList from '../../components/reviews-list/reviews-list';
import OffersList from '../../components/offers-list/offers-list';
import ReviewForm from '../../components/review-form/review-form';
import Map from '../../components/map/map';
import {useAppSelector} from '../../hooks/useAppSelector';
import {isAuthorized} from '../../utils';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchNearbyOffersAction, fetchReviewsAction, fetchSingleOfferAction } from '../../store/api-actions';
import Loading from '../../components/loading/loading';

function RoomScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();

  const {authorizationStatus, isSingleOfferDataLoading, isReviewsDataLoading, isNearbyOffersDataLoading, currentOffer, reviews, nearbyOffers} = useAppSelector((state) => state);

  const isAuth = isAuthorized(authorizationStatus);

  //const actions = [fetchSingleOfferAction, fetchReviewsAction, fetchNearbyOffersAction];

  useEffect(() => {
    if (params.id) {
      //Глеб, почему при такой записи ошибки нет
      dispatch(fetchSingleOfferAction(params.id));
      dispatch(fetchReviewsAction(params.id));
      dispatch(fetchNearbyOffersAction(params.id));

      /*
        а при такой получается ошибка: Argument of type 'string | undefined' is not assignable to parameter of type 'string'. Type 'undefined' is not assignable to type 'string'.

        Ругается на params.id
      */

      // actions.forEach((action) => {
      //   dispatch(action(params.id));
      // });
    }
  }, []);

  if (isSingleOfferDataLoading) {
    return (
      <Loading />
    );
  }

  return currentOffer ? (
    <>
      <section className="property">
        <div className="property__gallery-container container">
          {Boolean(currentOffer.images.length) &&
          <div className="property__gallery">
            {currentOffer.images.slice(0, MAX_PHOTO_COUNT).map((photo, index) => (
              <div className="property__image-wrapper" key={photo.slice(index)}>
                <img className="property__image" src={photo} alt="Photo studio" />
              </div>
            ))}
          </div>}
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {currentOffer.isPremium &&
            <div className="property__mark">
              <span>Premium</span>
            </div>}

            <div className="property__name-wrapper">
              <h1 className="property__name">
                {currentOffer.title}
              </h1>
            </div>

            <Rating className='property' number={currentOffer.rating} isShowNumer isMathFloorNumber />

            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {currentOffer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {`${currentOffer.bedrooms} Bedroom${currentOffer.bedrooms > 1 ? 's' : ''}`}
              </li>
              <li className="property__feature property__feature--adults">
                {`Max ${currentOffer.maxAdults} adult${currentOffer.maxAdults > 1 ? 's' : ''}`}
              </li>
            </ul>

            <div className="property__price">
              <b className="property__price-value">€{currentOffer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>

            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {currentOffer.goods.map((good) => (<li key={good} className="property__inside-item">{good}</li>))}
              </ul>
            </div>

            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={`property__avatar-wrapper ${currentOffer.host.isPro ? 'property__avatar-wrapper--pro ' : ''}user__avatar-wrapper`}>
                  <img
                    className="property__avatar user__avatar"
                    src={currentOffer.host.avatarUrl}
                    width="74"
                    height="74"
                    alt={`${currentOffer.host.name} avatar`}
                  />
                </div>
                <span className="property__user-name">{currentOffer.host.name}</span>
                {currentOffer.host.isPro &&
                <span className="property__user-status">Pro</span>}

              </div>
              <div className="property__description">
                {currentOffer.description}
              </div>
            </div>

            <section className="property__reviews reviews">
              <h2 className="reviews__title">
                Reviews · <span className="reviews__amount">{isReviewsDataLoading ? 0 : reviews.length}</span>
              </h2>
              {isReviewsDataLoading ? <Loading text={'Loading reviews'} isInner /> : <ReviewsList reviews={reviews} />}
              {isAuth && <ReviewForm id={`${currentOffer.id}`} />}
            </section>
          </div>
        </div>


        {/* <Map offers={offersByCurrentCity} selectedOffer={currentOffer} city={currentOffer.city} secondaryСlassName="property__map" /> */}

        {isNearbyOffersDataLoading ? <Loading text={'Loading map nearby offers'} isInner /> : <Map offers={[...nearbyOffers, currentOffer]} selectedOffer={currentOffer} city={currentOffer.city} secondaryСlassName="property__map" />}
      </section>
      <div className="container">
        {isNearbyOffersDataLoading ? <Loading text={'Loading nearby offers list'} isInner /> : <OffersList offers={nearbyOffers} isNear />}
      </div>
    </>
  ) : (<NotFoundScreen />);
}

export default RoomScreen;
