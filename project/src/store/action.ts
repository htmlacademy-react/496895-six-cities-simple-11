import {createAction} from '@reduxjs/toolkit';

const getOffersAction = createAction('offers/getOffersAction');
const changeCityAction = createAction('offers/changeCityAction', (value: string) => ({payload: value}));

export {
  getOffersAction,
  changeCityAction
};
