import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {TOffer, TAppDispatch, TState} from '../types/types';
import {getOffersAction, loadOffersAction, setOffersDataLoadingStatusAction} from './action';
import {APIRoute} from '../constants/constants';

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

export {fetchOffersAction};
