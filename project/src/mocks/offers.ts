import {Offer} from '../types/types';

const offers: Offer[] = [
  {
    id: 1,
    mark: 'Premium',
    img: {
      src: 'img/apartment-01.jpg',
      width: 260,
      height: 200,
      alt: 'Place image'
    },
    price: 120,
    rating: 4.3,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
  },
  {
    id: 2,
    img: {
      src: 'img/room.jpg',
      width: 260,
      height: 200,
      alt: 'Place image'
    },
    price: 80,
    rating: 3.8,
    name: 'Wood and stone place',
    type: 'Private room',
  },
  {
    id: 3,
    img: {
      src: 'img/apartment-02.jpg',
      width: 260,
      height: 200,
      alt: 'Place image'
    },
    price: 132,
    rating: 4.1,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
  },
  {
    id: 4,
    mark: 'Premium',
    img: {
      src: 'img/apartment-03.jpg',
      width: 260,
      height: 200,
      alt: 'Place image'
    },
    price: 180,
    rating: 4.6,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },
  {
    id: 5,
    img: {
      src: 'img/room.jpg',
      width: 260,
      height: 200,
      alt: 'Place image'
    },
    price: 80,
    rating: 3.7,
    name: 'Wood and stone place',
    type: 'Private room',
  }
];

export {offers};
