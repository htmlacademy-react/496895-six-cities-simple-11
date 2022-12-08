import {createReducer} from '@reduxjs/toolkit';
import {getOffersAction, changeCityAction, sortByPopularAction, sortByPriceLowToHighAction, sortByPriceHighToLowAction, sortByRatedFirstAction, changeSortingTypeAction, loadOffersAction, setOffersDataLoadingStatusAction, requireAuthorizationAction, setUserAction, loadSingleOfferAction, setSingleOfferDataLoadingStatusAction, loadReviewsAction, setReviewsDataLoadingStatusAction, loadNearbyOffersAction, setNearbyOffersDataLoadingStatusAction, setReviewDataSendingStatusAction} from './action';
import {AuthorizationStatus, DEFAULT_CITY_NAME, DEFAULT_OFFERS_SORTING_OPTION} from '../constants/constants';
import {TOffer, TSortingEnum, TUser, TReview} from '../types/types';

type TInitialState = {
  currentCityName: string;
  offers: TOffer[];
  nearbyOffers: TOffer[];
  offersByCurrentCity: TOffer[];
  sortingType: TSortingEnum;
  isOffersDataLoading: boolean;
  isSingleOfferDataLoading: boolean;
  isReviewsDataLoading: boolean;
  isReviewDataSending: boolean;
  isNearbyOffersDataLoading: boolean;
  authorizationStatus: string;
  user: TUser | null;
  currentOffer: TOffer | undefined;
  reviews: TReview[];
}

const initialState: TInitialState = {
  currentCityName: DEFAULT_CITY_NAME,
  offers: [],
  nearbyOffers: [],
  offersByCurrentCity: [],
  sortingType: DEFAULT_OFFERS_SORTING_OPTION,
  isOffersDataLoading: false,
  isSingleOfferDataLoading: false,
  isReviewsDataLoading: false,
  isNearbyOffersDataLoading: false,
  isReviewDataSending: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  currentOffer: undefined,
  reviews: []
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
    })
    .addCase(loadSingleOfferAction, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setSingleOfferDataLoadingStatusAction, (state, action) => {
      state.isSingleOfferDataLoading = action.payload;
    })
    .addCase(loadReviewsAction, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setReviewsDataLoadingStatusAction, (state, action) => {
      state.isReviewsDataLoading = action.payload;
    })
    .addCase(loadNearbyOffersAction, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setNearbyOffersDataLoadingStatusAction, (state, action) => {
      state.isNearbyOffersDataLoading = action.payload;
    })
    .addCase(setReviewDataSendingStatusAction, (state, action) => {
      state.isReviewDataSending = action.payload;
    });
});

export {reducer};
