import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {TOffer, TAppDispatch, TState, TUserData, TAuthData} from '../types/types';
import {getOffersAction, loadOffersAction, requireAuthorizationAction, setOffersDataLoadingStatusAction} from './action';
import {APIRoute, AuthorizationStatus} from '../constants/constants';
import {dropToken, saveToken} from '../services/token';

const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatusAction(true));
    const {data} = await api.get<TOffer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatusAction(false));
    dispatch(loadOffersAction(data));
    dispatch(getOffersAction());
  },
);

const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/checkAuthAction',
 async (_arg, {dispatch, extra: api}) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
  }
 }
);

const loginAction = createAsyncThunk<void, TAuthData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/login',
 async ({login: email, password}, {dispatch, extra: api}) => {
  const {data: {token}} = await api.post<TUserData>(APIRoute.Login, {email, password});
  saveToken(token);
  dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
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
    dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
 }
);
export {
  fetchOffersAction,
  checkAuthAction,
  loginAction,
  logoutAction
};
