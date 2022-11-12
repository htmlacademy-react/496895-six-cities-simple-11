import {useParams} from 'react-router-dom';
import {Offer, Review} from './../../types/types';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Rating from '../../components/rating/rating';
import ReviewForm from '../../components/review-form/review-form';

type RoomScreenProps = {
  offers: Offer[];
  reviews: Review[];
  isAuth: boolean;
}

const MAX_PHOTO_COUNT = 6;
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const getDateText = (data: string): string => {
  const date = new Date(data);
  const year = date.getFullYear();
  const monthNumber = date.getMonth();

  return `${MONTHS[monthNumber]} ${year}`;
};

const getDateTime = (data: string): string => {
  const date = new Date(data);
  const year = date.getFullYear();
  const monthNumber = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');

  return `${year}-${monthNumber}-${day}`;
};

function RoomScreen({offers, reviews, isAuth}: RoomScreenProps): JSX.Element {
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
              {Boolean(reviews.length) &&
                <ul className="reviews__list">
                  {reviews.map((review) => (
                    <li key={review.id} className="reviews__item">
                      <div className="reviews__user user">
                        <div className="reviews__avatar-wrapper user__avatar-wrapper">
                          <img
                            className="reviews__avatar user__avatar"
                            src={review.user.avatarUrl}
                            width="54"
                            height="54"
                            alt="Reviews avatar"
                          />
                        </div>
                        <span className="reviews__user-name">{review.user.name}</span>
                      </div>
                      <div className="reviews__info">
                        <Rating className='reviews' number={review.rating} />
                        <p className="reviews__text">
                          {review.comment}
                        </p>
                        <time className="reviews__time" dateTime={getDateTime(review.date)}>
                          {getDateText(review.date)}
                        </time>
                      </div>
                    </li>
                  ))}
                </ul>}

              {isAuth && <ReviewForm />}
            </section>
          </div>
        </div>
        <section className="property__map map" />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img
                    className="place-card__image"
                    src="img/room.jpg"
                    width={260}
                    height={200}
                    alt="Place image"
                  />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">€80</b>
                    <span className="place-card__price-text">/&nbsp;night</span>
                  </div>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{width: '80%'}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Wood and stone place</a>
                </h2>
                <p className="place-card__type">Private room</p>
              </div>
            </article>
            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img
                    className="place-card__image"
                    src="img/apartment-02.jpg"
                    width={260}
                    height={200}
                    alt="Place image"
                  />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">€132</b>
                    <span className="place-card__price-text">/&nbsp;night</span>
                  </div>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{width: '80%'}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Canal View Prinsengracht</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>
            <article className="near-places__card place-card">
              <div className="place-card__mark">
                <span>Premium</span>
              </div>
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img
                    className="place-card__image"
                    src="img/apartment-03.jpg"
                    width={260}
                    height={200}
                    alt="Place image"
                  />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">€180</b>
                    <span className="place-card__price-text">/&nbsp;night</span>
                  </div>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{width: '100%'}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Nice, cozy, warm big bed apartment</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  ) : (<NotFoundScreen />);
}

export default RoomScreen;
