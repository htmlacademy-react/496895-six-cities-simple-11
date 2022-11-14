import {useParams} from 'react-router-dom';
import {TOffer, TReview} from './../../types/types';
import {MAX_PHOTO_COUNT} from './../../constants/constants';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Rating from '../../components/rating/rating';
import ReviewsList from '../../components/reviews-list/reviews-list';
import OffersList from '../../components/offers-list/offers-list';
import ReviewForm from '../../components/review-form/review-form';
import Map from '../../components/map/map';

type TRoomScreenProps = {
  offers: TOffer[];
  nearbyOffers: TOffer[];
  reviews: TReview[];
  isAuth: boolean;
}

function RoomScreen({offers, nearbyOffers, reviews, isAuth}: TRoomScreenProps): JSX.Element {
  const params = useParams();
  const offer = offers.find((item) => `${item.id}` === params.id);

  return offer ? (
    <>
      <section className="property">
        <div className="property__gallery-container container">
          {Boolean(offer.images.length) &&
          <div className="property__gallery">
            {offer.images.slice(0, MAX_PHOTO_COUNT).map((photo, index) => (
              <div className="property__image-wrapper" key={photo.slice(index)}>
                <img className="property__image" src={photo} alt="Photo studio" />
              </div>
            ))}
          </div>}
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {offer.isPremium &&
            <div className="property__mark">
              <span>Premium</span>
            </div>}

            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.title}
              </h1>
            </div>

            <Rating className='property' number={offer.rating} isShowNumer isMathFloorNumber />

            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {`${offer.bedrooms} Bedroom${offer.bedrooms > 1 ? 's' : ''}`}
              </li>
              <li className="property__feature property__feature--adults">
                {`Max ${offer.maxAdults} adult${offer.maxAdults > 1 ? 's' : ''}`}
              </li>
            </ul>

            <div className="property__price">
              <b className="property__price-value">€{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>

            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {offer.goods.map((good) => (<li key={good} className="property__inside-item">{good}</li>))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={`property__avatar-wrapper ${offer.host.isPro ? 'property__avatar-wrapper--pro ' : ''}user__avatar-wrapper`}>
                  <img
                    className="property__avatar user__avatar"
                    src={offer.host.avatarUrl}
                    width="74"
                    height="74"
                    alt={`${offer.host.name} avatar`}
                  />
                </div>
                <span className="property__user-name">{offer.host.name}</span>
                {offer.host.isPro &&
                <span className="property__user-status">Pro</span>}

              </div>
              <div className="property__description">
                {offer.description}
              </div>
            </div>

            <section className="property__reviews reviews">
              <h2 className="reviews__title">
                Reviews · <span className="reviews__amount">{reviews.length}</span>
              </h2>
              {Boolean(reviews.length) && <ReviewsList reviews={reviews} />}
              {isAuth && <ReviewForm />}
            </section>
          </div>
        </div>
        <Map offers={[offer, ...nearbyOffers]} selectedOffer={offer} city={offer.city} secondaryСlassName="property__map" />
      </section>
      <div className="container">
        <OffersList offers={nearbyOffers} isNear />
      </div>
    </>
  ) : (<NotFoundScreen />);
}

export default RoomScreen;
