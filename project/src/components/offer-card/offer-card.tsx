import {Offer} from '../../types/types';
import Rating from '../rating/rating';

type OfferCardProps = {
  offer: Offer;
}

function OfferCard({offer}: OfferCardProps): JSX.Element {
  return (
    <article className="cities__card place-card">
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
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

        <Rating className='place-card' number={offer.rating} />

        <h2 className="place-card__name">
          <a href="#">Beautiful &amp; luxurious apartment at great location</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default OfferCard;
