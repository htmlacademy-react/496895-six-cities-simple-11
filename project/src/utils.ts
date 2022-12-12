import {AuthorizationStatus} from './constants/constants';
import { TOffer } from './types/types';

const isAuthorized = (status: string) => status === AuthorizationStatus.Auth;
const filterOffers = (offers: TOffer[], cityName: string) => offers.filter((offer) => offer.city.name === cityName);

export {
  isAuthorized,
  filterOffers
};
