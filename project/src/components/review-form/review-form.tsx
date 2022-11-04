import {useState, ChangeEvent} from 'react';
import RatingStar from '../rating-star/rating-star';

enum ReviewLength {
  Min = 50,
  Max = 300
}

const labelTitles: string[] = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({
    review: '',
    isValid: false
  });

  const [currentRating, setCurrentRating] = useState('');

  const validate = () => {
    setFormData((prevFormData) => ({...prevFormData, isValid: prevFormData.review.length >= ReviewLength.Min && prevFormData.review.length <= ReviewLength.Max && currentRating !== null}));
  };

  const fieldChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
    validate();
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
        {labelTitles.map((labelTitle, index) => <RatingStar key={labelTitle} currentOrder={(labelTitles.length - index).toString()} labelTitle={labelTitle} currentRating={currentRating} onChangeHandle={radioChangeHandle} />)}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={formData.review}
        onChange={fieldChangeHandle}
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
          disabled={!formData.isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
