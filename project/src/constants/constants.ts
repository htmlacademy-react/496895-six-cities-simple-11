import {sortByPopularAction, sortByPriceLowToHighAction, sortByPriceHighToLowAction, sortByRatedFirstAction} from '../store/action';
import {TSortingEnum} from '../types/types';

enum AppRoute {
  Root = '/',
  Room = '/offer',
  Login = '/login'
}

enum MainElClassName {
  Main = 'page__main page__main--index',
  MainEmpty = 'page__main page__main--index page__main--index-empty',
  Login = 'page__main page__main--login',
  Room = 'page__main page__main--property'
}

enum PageElClassName {
  Main = 'page page--gray page--main',
  Login = 'page page--gray page--login',
  Room = 'page'
}

enum RatingSetting {
  StarCount = 5,
  MaxPercent = 100,
}

enum MarkerUrl {
  Default = 'img/pin.svg',
  Current = 'img/pin-active.svg',
}

enum LeafletLayer {
  Link = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
}

const SortingType = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first'
} as const;

const sortingActionsMap = {
  'Popular': sortByPopularAction,
  'Price: low to high': sortByPriceLowToHighAction,
  'Price: high to low': sortByPriceHighToLowAction,
  'Top rated first': sortByRatedFirstAction
};

const CITIES_NAMES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
const SORTING_OPTIONS: TSortingEnum[] = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

const DEFAULT_CITY_NAME = 'Paris';
const DEFAULT_OFFERS_SORTING_OPTION: TSortingEnum = 'Popular';
const MAX_PHOTO_COUNT = 6;
const MAX_REVIEWS_COUNT = 10;

export {
  AppRoute,
  MainElClassName,
  PageElClassName,
  RatingSetting,
  MarkerUrl,
  LeafletLayer,
  MAX_PHOTO_COUNT,
  MAX_REVIEWS_COUNT,
  CITIES_NAMES,
  DEFAULT_CITY_NAME,
  DEFAULT_OFFERS_SORTING_OPTION,
  SORTING_OPTIONS,
  SortingType,
  sortingActionsMap
};
