import { NameSpace } from '../../constants/constants';
import { TOffer, TSortingEnum, TState } from '../../types/types';

const getCurrentCityName = (state: TState): string => state[NameSpace.Offers].currentCityName;
const getSortingType = (state: TState): TSortingEnum => state[NameSpace.Offers].sortingType;
const getOffers = (state: TState): TOffer[] => state[NameSpace.Offers].offers;
const getNearbyOffers = (state: TState): TOffer[] => state[NameSpace.Offers].nearbyOffers;
const getOffersByCurrentCity = (state: TState): TOffer[] => state[NameSpace.Offers].offersByCurrentCity;
const getCurrentOffer = (state: TState): TOffer | undefined => state[NameSpace.Offers].currentOffer;
const getOffersDataLoadingStatus = (state: TState): boolean => state[NameSpace.Offers].isOffersDataLoading;
const getNearbyOffersDataLoadingStatus = (state: TState): boolean => state[NameSpace.Offers].isNearbyOffersDataLoading;
const getSingleOfferDataLoadingStatus = (state: TState): boolean => state[NameSpace.Offers].isSingleOfferDataLoading;
const getLoadingErrorStatus = (state: TState): boolean => state[NameSpace.Offers].hasLoadingError;
const getNearbyOffersLoadingErrorStatus = (state: TState): boolean => state[NameSpace.Offers].hasNearbyOffersLoadingError;

export {
  getCurrentCityName,
  getSortingType,
  getOffers,
  getNearbyOffers,
  getOffersByCurrentCity,
  getCurrentOffer,
  getOffersDataLoadingStatus,
  getNearbyOffersDataLoadingStatus,
  getSingleOfferDataLoadingStatus,
  getLoadingErrorStatus,
  getNearbyOffersLoadingErrorStatus
};
