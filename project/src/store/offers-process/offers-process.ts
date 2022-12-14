import {createSlice} from '@reduxjs/toolkit';
import {DEFAULT_CITY_NAME, DEFAULT_OFFERS_SORTING_OPTION, NameSpace} from '../../constants/constants';
import {TOffersProcess, TSortingEnum} from '../../types/types';
import {filterOffers} from '../../utils';
import {fetchNearbyOffersAction, fetchOffersAction, fetchSingleOfferAction} from '../api-actions';

const initialState: TOffersProcess = {
  currentCityName: DEFAULT_CITY_NAME,
  offers: [],
  nearbyOffers: [],
  offersByCurrentCity: [],
  sortingType: DEFAULT_OFFERS_SORTING_OPTION,
  isOffersDataLoading: false,
  isSingleOfferDataLoading: false,
  isNearbyOffersDataLoading: false,
  currentOffer: undefined,
  hasLoadingError: false,
  hasNearbyOffersLoadingError: false
};

const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    sortByPopular: (state) => {
      state.offersByCurrentCity = state.offersByCurrentCity.sort((a, b) => a.id - b.id);
    },
    sortByPriceLowToHigh: (state) => {
      state.offersByCurrentCity = state.offersByCurrentCity.sort((a, b) => a.price - b.price);
    },
    sortByPriceHighToLow: (state) => {
      state.offersByCurrentCity = state.offersByCurrentCity.sort((a, b) => b.price - a.price);
    },
    sortByRatedFirst: (state) => {
      state.offersByCurrentCity = state.offersByCurrentCity.sort((a, b) => b.rating - a.rating);
    },
    changeSortingType: (state, action: {type: string; payload: TSortingEnum}) => {
      state.sortingType = action.payload;
    },
    changeCity: (state, action: {type: string; payload: string}) => {
      state.currentCityName = action.payload;
    },
    setOffers: (state) => {
      state.offersByCurrentCity = filterOffers(state.offers, state.currentCityName);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offers = [];
        state.isOffersDataLoading = false;
        state.hasLoadingError = true;
        state.offersByCurrentCity = [];
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersByCurrentCity = filterOffers(state.offers, state.currentCityName);
        state.isOffersDataLoading = false;
        state.hasLoadingError = false;
      })
      .addCase(fetchSingleOfferAction.pending, (state) => {
        state.isSingleOfferDataLoading = true;
      })
      .addCase(fetchSingleOfferAction.rejected, (state) => {
        state.currentOffer = undefined;
        state.isSingleOfferDataLoading = false;
        state.hasLoadingError = true;
      })
      .addCase(fetchSingleOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isSingleOfferDataLoading = false;
        state.hasLoadingError = false;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isNearbyOffersDataLoading = true;
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.nearbyOffers = [];
        state.isNearbyOffersDataLoading = false;
        state.hasNearbyOffersLoadingError = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.isNearbyOffersDataLoading = false;
        state.hasNearbyOffersLoadingError = false;
      });
  },
});

export const {sortByPopular, sortByPriceLowToHigh, sortByPriceHighToLow, sortByRatedFirst, changeSortingType, changeCity, setOffers} = offersProcess.actions;

const sortingActionsMap = {
  'Popular': sortByPopular,
  'Price: low to high': sortByPriceLowToHigh,
  'Price: high to low': sortByPriceHighToLow,
  'Top rated first': sortByRatedFirst,
};

export {offersProcess, sortingActionsMap};
