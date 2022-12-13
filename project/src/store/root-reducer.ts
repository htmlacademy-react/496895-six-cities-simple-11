import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../constants/constants';
import {reviewsData} from './reviews-data/reviews-data';
import {offersProcess} from './offers-process/offers-process';
import {userProcess} from './user-process/user-process';

const rootReducer = combineReducers({
  [NameSpace.Reviews]: reviewsData.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});

export {rootReducer};
