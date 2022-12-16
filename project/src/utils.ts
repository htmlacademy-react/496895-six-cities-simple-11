import {AuthorizationStatus} from './constants/constants';
import {TOffer, TSortingEnum} from './types/types';

const isAuthorized = (status: string) => status === AuthorizationStatus.Auth;
const filterOffers = (offers: TOffer[], cityName: string) => offers.filter((offer) => offer.city.name === cityName);

const sortByPopular = (offers: TOffer[]) => offers.sort((a, b) => a.id - b.id);
const sortByPriceLowToHigh = (offers: TOffer[]) => offers.sort((a, b) => a.price - b.price);
const sortByPriceHighToLow = (offers: TOffer[]) => offers.sort((a, b) => b.price - a.price);
const sortByRatedFirst = (offers: TOffer[]) => offers.sort((a, b) => b.rating - a.rating);

const sortingFunctionssMap = {
  'Popular': sortByPopular,
  'Price: low to high': sortByPriceLowToHigh,
  'Price: high to low': sortByPriceHighToLow,
  'Top rated first': sortByRatedFirst,
};

const sortOffers = (offers: TOffer[], sortingType: TSortingEnum) => sortingFunctionssMap[sortingType]([...offers]);

export {
  isAuthorized,
  filterOffers,
  sortOffers
};
