import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const OFFER_CARDS_COUNT: number = 5;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App cardsCount={OFFER_CARDS_COUNT} />
  </React.StrictMode>,
);
