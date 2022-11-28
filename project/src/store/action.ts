import {createAction} from '@reduxjs/toolkit';
import {TSortingEnum, TOffer} from '../types/types';
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
  requireAuthorizationAction
};
