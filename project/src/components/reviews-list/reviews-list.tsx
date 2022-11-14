import {TReview} from './../../types/types';
import {MAX_REVIEWS_COUNT} from './../../constants/constants';
import Review from '../../components/review/review';

type TReviewsListProps = {
  reviews: TReview[];
}

const sortByDate = (a: TReview, b: TReview) : number => (new Date(b.date).getTime() - new Date(a.date).getTime());

function ReviewsList({reviews} : TReviewsListProps ) : JSX.Element {
  const copiedReviews = reviews.slice();
  const sortedReviews = copiedReviews.sort(sortByDate).slice(0, MAX_REVIEWS_COUNT);

  return (
    <ul className="reviews__list">
      {sortedReviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
}
export default ReviewsList;
