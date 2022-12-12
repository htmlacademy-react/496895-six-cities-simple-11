import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {TOffer, TAppDispatch, TState, TUser, TAuthData, TReview, TReviewData} from '../types/types';
import {APIRoute} from '../constants/constants';
import {dropToken, saveToken} from '../services/token';

const fetchOffersAction = createAsyncThunk<TOffer[], undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TOffer[]>(APIRoute.Offers);
    return data;
  },
);

const checkAuthAction = createAsyncThunk<TUser, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/checkAuthAction',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get(APIRoute.Login);
    return data;
  }
);

const loginAction = createAsyncThunk<TUser, TAuthData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<TUser>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  }
);

const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

const fetchSingleOfferAction = createAsyncThunk<TOffer, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchSingleOffer',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TOffer>(`${APIRoute.Offers}/${id}`);
    window.scrollTo(0, 0);
    return data;
  },
);

const fetchReviewsAction = createAsyncThunk<TReview[], string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TReview[]>(`${APIRoute.Reviews}/${id}`);
    return data;
  },
);

const fetchNearbyOffersAction = createAsyncThunk<TOffer[], string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TOffer[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  },
);

const addReviewAction = createAsyncThunk<TReview[], TReviewData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/addReview',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<TReview[]>(`${APIRoute.Reviews}/${id}`, {comment, rating});
    return data;
  }
);

export {
  fetchOffersAction,
  checkAuthAction,
  loginAction,
  logoutAction,
  fetchSingleOfferAction,
  fetchReviewsAction,
  fetchNearbyOffersAction,
  addReviewAction
};
