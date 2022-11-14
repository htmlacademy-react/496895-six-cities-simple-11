import {TReview} from './../../types/types';
import Rating from './../rating/rating';

type TReviewProps = {
  review: TReview;
}

type TDateFormat = {
  text: string;
  dateTime: string;
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const getDate = (data: string) : TDateFormat => {
  const date = new Date(data);
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const month = `${monthIndex + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');

  return {
    text: `${MONTHS[monthIndex]} ${year}`,
    dateTime: `${year}-${month}-${day}`
  };
};

function Review({review}: TReviewProps) : JSX.Element {
  const date = getDate(review.date);

  return (
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
        <time className="reviews__time" dateTime={date.dateTime}>
          {date.text}
        </time>
      </div>
    </li>
  );
}

export default Review;
