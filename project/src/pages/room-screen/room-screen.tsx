import {useParams} from 'react-router-dom';
import {Offer} from './../../types/types';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Rating from '../../components/rating/rating';
import ReviewForm from '../../components/review-form/review-form';

type RoomScreenProps = {
  offers: Offer[];
  isAuth: boolean;
}

const MAX_PHOTO_COUNT = 6;

function RoomScreen({offers, isAuth}: RoomScreenProps): JSX.Element {
  const params = useParams();
  const offer = offers.find((item) => item.id === params.id);
  return offer ? (
    <>
      <section className="property">
        <div className="property__gallery-container container">
          {offer.photos.length !== 0 &&
          <div className="property__gallery">
            {offer.photos.slice(0, MAX_PHOTO_COUNT).map((photo) => (
              <div key={photo.key} className="property__image-wrapper">
                <img className="property__image" src={photo.src} alt={photo.alt} />
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
                {offer.name}
              </h1>
            </div>

            <Rating className='property' number={offer.rating} isShowNumer isMathFloorNumber />

            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {`${offer.bedroomsCount} Bedroom${offer.bedroomsCount > 1 ? 's' : ''}`}
              </li>
              <li className="property__feature property__feature--adults">
                {`Max ${offer.adultsCount} adult${offer.adultsCount > 1 ? 's' : ''}`}
              </li>
            </ul>

            <div className="property__price">
              <b className="property__price-value">€{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>

            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {offer.insides.map((inside) => (<li key={inside.key} className="property__inside-item">{inside.value}</li>))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={`property__avatar-wrapper ${offer.user.isPro ? 'property__avatar-wrapper--pro ' : ''}user__avatar-wrapper`}>
                  <img
                    className="property__avatar user__avatar"
                    src={offer.user.img.src}
                    width={offer.user.img.width}
                    height={offer.user.img.height}
                    alt={offer.user.img.alt}
                  />
                </div>
                <span className="property__user-name">{offer.user.name}</span>
                {offer.user.isPro &&
                <span className="property__user-status">Pro</span>}

              </div>
              <div className="property__description">
                {offer.descriptionParagraphs.map((paragraph) => (<p key={paragraph.slice(0, 20)}>{paragraph}</p>))}
              </div>
            </div>

            <section className="property__reviews reviews">
              <h2 className="reviews__title">
                Reviews · <span className="reviews__amount">{offer.reviews.length}</span>
              </h2>
              <ul className="reviews__list">
                {offer.reviews.map((review) => (
                  <li key={review.id} className="reviews__item">
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img
                          className="reviews__avatar user__avatar"
                          src={review.user.img.src}
                          width={review.user.img.width}
                          height={review.user.img.height}
                          alt={review.user.img.alt}
                        />
                      </div>
                      <span className="reviews__user-name">{review.user.name}</span>
                    </div>
                    <div className="reviews__info">
                      <Rating className='reviews' number={review.rating} />
                      <p className="reviews__text">
                        {review.text}
                      </p>
                      <time className="reviews__time" dateTime={review.date}>
                        April 2019
                      </time>
                    </div>
                  </li>
                ))}
              </ul>
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
