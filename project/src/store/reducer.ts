import {createReducer} from '@reduxjs/toolkit';
import {getOffersAction, changeCityAction, sortByPopularAction, sortByPriceLowToHighAction, sortByPriceHighToLowAction, sortByRatedFirstAction, changeSortingTypeAction, loadOffersAction, setOffersDataLoadingStatusAction, requireAuthorizationAction, setUserAction} from './action';
import {AuthorizationStatus, DEFAULT_CITY_NAME, DEFAULT_OFFERS_SORTING_OPTION} from '../constants/constants';
import {TOffer, TSortingEnum, TUser} from '../types/types';

type TInitialState = {
  currentCityName: string;
  offers: TOffer[];
  offersByCurrentCity: TOffer[];
  sortingType: TSortingEnum;
  isOffersDataLoading: boolean;
  authorizationStatus: string;
  user: TUser | null;
}

const initialState: TInitialState = {
  currentCityName: DEFAULT_CITY_NAME,
  offers: [],
  offersByCurrentCity: [],
  sortingType: DEFAULT_OFFERS_SORTING_OPTION,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null
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
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserAction, (state, action) => {
      state.user = action.payload;
    });
});

export {reducer};
