import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers, nearbyOffers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {city} from './mocks/city';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const isAuth = true;

root.render(
  <React.StrictMode>
    <App isAuth={isAuth} reviews={reviews} offers={offers} nearbyOffers={nearbyOffers} city={city} />
  </React.StrictMode>,
);
