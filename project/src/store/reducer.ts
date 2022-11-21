import {createReducer} from '@reduxjs/toolkit';
import {getOffersAction, changeCityAction, sortByPopularAction, sortByPriceLowToHighAction, sortByPriceHighToLowAction, sortByRatedFirstAction, changeSortingTypeAction} from './action';
import {offers} from '../mocks/offers';
import {DEFAULT_CITY_NAME, DEFAULT_OFFERS_SORTING_OPTION} from '../constants/constants';

const initialState = {
  currentCityName: DEFAULT_CITY_NAME,
  offers: offers,
  offersByCurrentCity: offers.filter((offer) => offer.city.name === DEFAULT_CITY_NAME),
  sortingType: DEFAULT_OFFERS_SORTING_OPTION,
  isAuth: true
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffersAction, (state) => {
      state.offersByCurrentCity = state.offers.filter((offer) => offer.city.name === state.currentCityName);
    })
    .addCase(changeCityAction, (state, action) => {
      state.currentCityName = action.payload;
    })
    .addCase(sortByPopularAction, (state) => {
      state.offersByCurrentCity = state.offersByCurrentCity.sort((a, b) => a.id - b.id);
    })
    .addCase(sortByPriceLowToHighAction, (state) => {
      state.offersByCurrentCity = state.offersByCurrentCity.sort((a, b) => a.price - b.price);
    })
    .addCase(sortByPriceHighToLowAction, (state) => {
      state.offersByCurrentCity = state.offersByCurrentCity.sort((a, b) => b.price - a.price);
    })
    .addCase(sortByRatedFirstAction, (state) => {
      state.offersByCurrentCity = state.offersByCurrentCity.sort((a, b) => b.rating - a.rating);
    })
    .addCase(changeSortingTypeAction, (state, action) => {
      state.sortingType = action.payload;
    });
});

export {reducer};
