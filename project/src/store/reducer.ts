import {createReducer} from '@reduxjs/toolkit';
import {getOffersAction, changeCityAction, sortByPopularAction, sortByPriceLowToHighAction, sortByPriceHighToLowAction, sortByRatedFirstAction, changeSortingTypeAction, loadOffersAction, setOffersDataLoadingStatusAction} from './action';
import {DEFAULT_CITY_NAME, DEFAULT_OFFERS_SORTING_OPTION} from '../constants/constants';
import {TOffer, TSortingEnum} from '../types/types';

type TInitialState = {
  currentCityName: string;
  offers: TOffer[];
  offersByCurrentCity: TOffer[];
  sortingType: TSortingEnum;
  isAuth: boolean;
  isOffersDataLoading: boolean;
}

const initialState: TInitialState = {
  currentCityName: DEFAULT_CITY_NAME,
  offers: [],
  offersByCurrentCity: [],
  sortingType: DEFAULT_OFFERS_SORTING_OPTION,
  isAuth: true,
  isOffersDataLoading: false
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
    })
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatusAction, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export {reducer};
