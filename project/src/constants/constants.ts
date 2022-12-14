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

enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const SortingType = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first'
} as const;

const CITIES_NAMES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
const SORTING_OPTIONS: TSortingEnum[] = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

const DEFAULT_CITY_NAME = 'Paris';
const DEFAULT_OFFERS_SORTING_OPTION: TSortingEnum = 'Popular';
const MAX_PHOTO_COUNT = 6;
const MAX_REVIEWS_COUNT = 10;
const AUTH_TOKEN_KEY_NAME = 'guess-six-cities-token';
const AUTH_USER_EMAIL_NAME = 'guess-six-cities-email';

enum NameSpace {
  Offers = 'OFFERS',
  User = 'USER',
  Reviews = 'REVIEWS'
}

const PASSWORD_PATTERN = '([0-9].*[A-Za-z])|([A-Za-z].*[0-9])';

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
  AUTH_TOKEN_KEY_NAME,
  AUTH_USER_EMAIL_NAME,
  APIRoute,
  AuthorizationStatus,
  NameSpace,
  PASSWORD_PATTERN
};
