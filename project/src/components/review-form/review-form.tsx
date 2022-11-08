import {useState, useEffect, ChangeEvent} from 'react';
import RatingStar from '../rating-star/rating-star';

enum ReviewLength {
  Min = 50,
  Max = 300
}

const labelTitles: string[] = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

function ReviewForm(): JSX.Element {
  const [currentRating, setCurrentRating] = useState('');
  const [review, setReview] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(review.length >= ReviewLength.Min && review.length <= ReviewLength.Max && currentRating !== '');
  }, [currentRating, review]);

  const fieldChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.target;
    setReview(value);
  };

  const radioChangeHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    setCurrentRating(evt.target.value);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>

      <div className="reviews__rating-form form__rating">
        {labelTitles.map((labelTitle, index) => (
          <RatingStar
            key={labelTitle}
            currentOrder={`${labelTitles.length - index}`}
            labelTitle={labelTitle}
            currentRating={currentRating}
            onChangeHandle={radioChangeHandle}
          />
        )
        )}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={review}
        onChange={fieldChangeHandler}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your
          stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
