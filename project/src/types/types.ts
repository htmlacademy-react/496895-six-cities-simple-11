import {store} from '../store';
import {SortingType} from '../constants/constants';

type TUser = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
  email: string;
  token: string;
}

type TReview = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: TUser;
}

type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type TCity = {
  location: TLocation;
  name: string;
}

type TOffer = {
  bedrooms: number;
  city: {
    location: TLocation;
    name: string;
  };
  description: string;
  goods: string[];
  host: TUser;
  id: number;
  images: string[];
  isPremium: boolean;
  location: TLocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

type TAuthData = {
  login: string;
  password: string;
}

type TState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

type TSortingEnum = typeof SortingType[keyof typeof SortingType];

export type {TReview, TOffer, TCity, TLocation, TState, TAppDispatch, TSortingEnum, TAuthData, TUser};
