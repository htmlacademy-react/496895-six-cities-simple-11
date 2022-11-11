import {Review} from '../types/types';

const reviews: Review[] = [
  {
    id: 1,
    user: {
      isPro: false,
      id: 1,
      avatarUrl: 'img/avatar-max.jpg',
      name: 'Max',
    },
    rating: 4,
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'Wed Apr 24 2019 03:00:00 GMT+0300 (Москва, стандартное время)'
  }
];

export {reviews};
