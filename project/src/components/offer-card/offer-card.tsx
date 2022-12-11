import {TOffer} from '../../types/types';
import {AppRoute} from '../../constants/constants';
import Rating from '../rating/rating';
import {Link} from 'react-router-dom';
import { memo } from 'react';

type TOfferCardProps = {
  offer: TOffer;
  onCardHover?: (id: number) => void | undefined;
  isNear?: boolean;
}

function OfferCard({offer, onCardHover, isNear}: TOfferCardProps): JSX.Element {
  const {isPremium, id, previewImage, price, rating, title, type} = offer;

  const cardClassName = isNear ? 'near-places__card' : 'cities__card';
  const cardImageWrapperClassName = isNear ? 'near-places__image-wrapper' : 'cities__image-wrapper';

  const cardMouseOverHandler = isNear ? undefined : () : void => {
    if (onCardHover) {
      onCardHover(id);
    }
  };

  return (
    <article className={`${cardClassName} place-card`} onMouseOver={cardMouseOverHandler}>
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${cardImageWrapperClassName} place-card__image-wrapper`}>
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

export default memo(OfferCard);
