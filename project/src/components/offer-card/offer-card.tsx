import {Offer} from '../../types/types';
import {AppRoute} from '../../constants/constants';
import Rating from '../rating/rating';
import {Link} from 'react-router-dom';

type OfferCardProps = {
  offer: Offer;
  onCardHover: (id: string) => void;
}

function OfferCard({offer, onCardHover}: OfferCardProps): JSX.Element {

  const cardMouseOverHandle = (): void => {
    onCardHover(offer.id);
  };

  return (
    <article className="cities__card place-card" onMouseOver={cardMouseOverHandle}>
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${offer.id}`}>
          <img className="place-card__image" src={offer.img.src} width={offer.img.width} height={offer.img.height} alt={offer.img.alt} />
        </Link>
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
          <Link to={`${AppRoute.Room}/${offer.id}`}>{offer.name}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
