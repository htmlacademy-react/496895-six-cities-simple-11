import {createReducer} from '@reduxjs/toolkit';
import {getOffersAction, changeCityAction} from './action';
import {offers} from '../mocks/offers';
import {DEFAULT_CITY_NAME} from '../constants/constants';

const initialState = {
  currentCityName: DEFAULT_CITY_NAME,
  offers: offers,
  offersByCurrentCity: offers.filter((offer) => offer.city.name === DEFAULT_CITY_NAME),
  isAuth: true
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffersAction, (state) => {
      state.offersByCurrentCity = state.offers.filter((offer) => offer.city.name === state.currentCityName);
    })
    .addCase(changeCityAction, (state, action) => {
      state.currentCityName = action.payload;
    });
});

export {reducer};
