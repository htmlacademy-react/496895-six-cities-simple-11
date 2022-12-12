import {createAction} from '@reduxjs/toolkit';

const sortByPopularAction = createAction('offers/sortByPopularAction');
const sortByPriceLowToHighAction = createAction('offers/sortByPriceLowToHighAction');
const sortByPriceHighToLowAction = createAction('offers/sortByPriceHighToLowAction');
const sortByRatedFirstAction = createAction('offers/sortByRatedFirstAction');

export {
  sortByPopularAction,
  sortByPriceLowToHighAction,
  sortByPriceHighToLowAction,
  sortByRatedFirstAction
};
