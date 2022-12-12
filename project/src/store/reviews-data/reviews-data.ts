import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../constants/constants';
import {TReviewsData} from '../../types/types';
import {addReviewAction, fetchReviewsAction} from '../api-actions';

const initialState: TReviewsData = {
  isReviewsDataLoading: false,
  isReviewDataSending: false,
  hasLoadingError: false,
  reviews: []
};

const reviewsData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsDataLoading = true;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.reviews = [];
        state.isReviewsDataLoading = false;
        state.hasLoadingError = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsDataLoading = false;
        state.hasLoadingError = false;
      })
      .addCase(addReviewAction.pending, (state) => {
        state.isReviewDataSending = true;
      })
      .addCase(addReviewAction.rejected, (state,) => {
        state.isReviewDataSending = false;
      })
      .addCase(addReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewDataSending = false;
      });
  }
});

export {reviewsData};
