import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {TOffer, TAppDispatch, TState, TUser, TAuthData, TReview, TReviewData} from '../types/types';
import {getOffersAction, loadOffersAction, loadSingleOfferAction, requireAuthorizationAction, setOffersDataLoadingStatusAction, setUserAction, setSingleOfferDataLoadingStatusAction, setReviewsDataLoadingStatusAction, loadReviewsAction, setNearbyOffersDataLoadingStatusAction, loadNearbyOffersAction, setReviewDataSendingStatusAction} from './action';
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
    const {data} = await api.post<TUser>(APIRoute.Login, {email, password});
    dispatch(setUserAction(data));
    saveToken(data.token);
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
    dispatch(setUserAction(null));
    dropToken();
    dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
  }
);

const fetchSingleOfferAction = createAsyncThunk<void, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchSingleOffer',
  async (id, {dispatch, extra: api}) => {
    dispatch(setSingleOfferDataLoadingStatusAction(true));
    const {data} = await api.get<TOffer>(`${APIRoute.Offers}/${id}`);
    dispatch(setSingleOfferDataLoadingStatusAction(false));
    dispatch(loadSingleOfferAction(data));
  },
);

const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    dispatch(setReviewsDataLoadingStatusAction(true));
    const {data} = await api.get<TReview[]>(`${APIRoute.Reviews}/${id}`);
    dispatch(setReviewsDataLoadingStatusAction(false));
    dispatch(loadReviewsAction(data));
  },
);

const fetchNearbyOffersAction = createAsyncThunk<void, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (id, {dispatch, extra: api}) => {
    dispatch(setNearbyOffersDataLoadingStatusAction(true));
    const {data} = await api.get<TOffer[]>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(setNearbyOffersDataLoadingStatusAction(false));
    dispatch(loadNearbyOffersAction(data));
  },
);


const addReviewAction = createAsyncThunk<void, TReviewData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/addReview',
  async ({id, comment, rating, handleSuccessSubmit}, {dispatch, extra: api}) => {
    dispatch(setReviewDataSendingStatusAction(true));
    const {data} = await api.post<TReview[]>(`${APIRoute.Reviews}/${id}`, {comment, rating});
    dispatch(loadReviewsAction(data));
    handleSuccessSubmit();
    dispatch(setReviewDataSendingStatusAction(false));
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
