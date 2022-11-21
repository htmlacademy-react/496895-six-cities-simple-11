import {createAction} from '@reduxjs/toolkit';
import {TSortingEnum} from '../types/types';

const getOffersAction = createAction('offers/getOffersAction');
const changeCityAction = createAction('offers/changeCityAction', (value: string) => ({payload: value}));

const sortByPopularAction = createAction('offers/sortByPopularAction');
const sortByPriceLowToHighAction = createAction('offers/sortByPriceLowToHighAction');
const sortByPriceHighToLowAction = createAction('offers/sortByPriceHighToLowAction');
const sortByRatedFirstAction = createAction('offers/sortByRatedFirstAction');
const changeSortingTypeAction = createAction('offers/changeSortingTypeAction', (value: TSortingEnum) => ({payload: value}));

export {
  getOffersAction,
  changeCityAction,
  sortByPopularAction,
  sortByPriceLowToHighAction,
  sortByPriceHighToLowAction,
  sortByRatedFirstAction,
  changeSortingTypeAction
};
