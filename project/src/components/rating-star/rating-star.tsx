import {ChangeEvent} from 'react';

type RatingStarPrrops = {
  currentOrder: string;
  currentRating: string;
  labelTitle: string;
  onChangeHandle: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function RatingStar({currentOrder, labelTitle, onChangeHandle, currentRating}: RatingStarPrrops): JSX.Element {

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={currentOrder}
        id={`${currentOrder}-stars`}
        key={`${currentOrder}-stars`}
        type="radio" onChange={onChangeHandle}
        checked={currentRating === currentOrder}
      />
      <label
        htmlFor={`${currentOrder}-stars`}
        className="reviews__rating-label form__rating-label"
        title={labelTitle}
        key={labelTitle}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}
export default RatingStar;
