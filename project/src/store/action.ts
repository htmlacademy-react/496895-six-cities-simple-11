import {createAction} from '@reduxjs/toolkit';
import {TSortingEnum, TOffer, TUser, TReview} from '../types/types';
import {AuthorizationStatus} from '../constants/constants';

const getOffersAction = createAction('offers/getOffersAction');
const changeCityAction = createAction('offers/changeCityAction', (value: string) => ({payload: value}));

const sortByPopularAction = createAction('offers/sortByPopularAction');
const sortByPriceLowToHighAction = createAction('offers/sortByPriceLowToHighAction');
const sortByPriceHighToLowAction = createAction('offers/sortByPriceHighToLowAction');
const sortByRatedFirstAction = createAction('offers/sortByRatedFirstAction');
const changeSortingTypeAction = createAction('offers/changeSortingTypeAction', (value: TSortingEnum) => ({payload: value}));
const loadOffersAction = createAction<TOffer[]>('data/loadOffersAction');
const setOffersDataLoadingStatusAction = createAction<boolean>('setOffersDataLoadingStatusAction');
const requireAuthorizationAction = createAction<AuthorizationStatus>('user/requireAuthorization');
const setUserAction = createAction<TUser | null>('user/setUserAction');
const loadSingleOfferAction = createAction<TOffer>('data/loadCurrentOfferAction');
const setSingleOfferDataLoadingStatusAction = createAction<boolean>('setSingleOfferDataLoadingStatusAction');
const loadReviewsAction = createAction<TReview[]>('data/loadReviewsAction');
const setReviewsDataLoadingStatusAction = createAction<boolean>('setReviewsDataLoadingStatusAction');
const loadNearbyOffersAction = createAction<TOffer[]>('data/loadNearbyOffersAction');
const setNearbyOffersDataLoadingStatusAction = createAction<boolean>('setNearbyOffersDataLoadingStatusAction');
const setReviewDataSendingStatusAction = createAction<boolean>('setReviewDataSendingStatusAction');

export {
  getOffersAction,
  changeCityAction,
  sortByPopularAction,
  sortByPriceLowToHighAction,
  sortByPriceHighToLowAction,
  sortByRatedFirstAction,
  changeSortingTypeAction,
  loadOffersAction,
  setOffersDataLoadingStatusAction,
  requireAuthorizationAction,
  setUserAction,
  loadSingleOfferAction,
  setSingleOfferDataLoadingStatusAction,
  loadReviewsAction,
  setReviewsDataLoadingStatusAction,
  loadNearbyOffersAction,
  setNearbyOffersDataLoadingStatusAction,
  setReviewDataSendingStatusAction
};
