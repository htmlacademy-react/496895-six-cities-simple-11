import {NameSpace} from '../../constants/constants';
import {TState} from '../../types/types';
import {TReview} from '../../types/types';

const getReviews = (state: TState): TReview[] => state[NameSpace.Reviews].reviews;
const getReviewsDataLoadingStatus = (state: TState): boolean => state[NameSpace.Reviews].isReviewsDataLoading;
const getReviewDataSendingStatus = (state: TState): boolean => state[NameSpace.Reviews].isReviewDataSending;
const getReviewsLoadingErrorStatus = (state: TState): boolean => state[NameSpace.Reviews].hasLoadingError;
const getReviewsSendingErrorStatus = (state: TState): boolean => state[NameSpace.Reviews].hasSendingError;

export {
  getReviews,
  getReviewsDataLoadingStatus,
  getReviewDataSendingStatus,
  getReviewsLoadingErrorStatus,
  getReviewsSendingErrorStatus
};
