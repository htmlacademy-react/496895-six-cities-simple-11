import {Offer} from '../../types/types';
import {AppRoute} from '../../constants/constants';
import Rating from '../rating/rating';
import {Link} from 'react-router-dom';

type OfferCardProps = {
  offer: Offer;
  onCardHover: (id: number) => void;
}

function OfferCard({offer, onCardHover}: OfferCardProps): JSX.Element {
  const {isPremium, id, previewImage, price, rating, title, type} = offer;

  const cardMouseOverHandler = (): void => {
    onCardHover(id);
  };

  return (
    <article className="cities__card place-card" onMouseOver={cardMouseOverHandler}>
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>

        <Rating className='place-card' number={rating} />

        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
