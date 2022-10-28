import {Offer} from '../../types/types';

type OfferCardProps = {
  offer: Offer;
}

const RATING_STAR_COUNT = 5;
const MAX_PERCENT = 100;

function OfferCard({offer}: OfferCardProps): JSX.Element {
  const ratingAsPercentage = (MAX_PERCENT / RATING_STAR_COUNT) * Math.round(offer.rating);

  return (
    <article className="cities__card place-card">
      {offer.mark &&
      <div className="place-card__mark">
        <span>{offer.mark}</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.img.src} width={offer.img.width} height={offer.img.height} alt={offer.img.alt} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingAsPercentage}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Beautiful &amp; luxurious apartment at great location</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default OfferCard;
