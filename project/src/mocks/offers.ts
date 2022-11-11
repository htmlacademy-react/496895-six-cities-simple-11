import {Offer, City} from '../types/types';

const city: City = {
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
  },
  name: 'Amsterdam'
};

const photos: string[] = ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'];

const goods: string[] = ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV'];

const description = 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.';

const offers: Offer[] = [
  {
    bedrooms: 4,
    city: city,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      name: 'Angelina',
      isPro: true,
    },
    id: 1,
    images: photos,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.3,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment'
  },
  {
    bedrooms: 4,
    city: city,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      name: 'Angelina',
      isPro: true,
    },
    id: 2,
    images: photos,
    isPremium: false,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/room.jpg',
    price: 80,
    rating: 3.8,
    title: 'Wood and stone place',
    type: 'Private room'
  },
  {
    bedrooms: 4,
    city: city,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      name: 'Angelina',
      isPro: true,
    },
    id: 3,
    images: photos,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    rating: 4.1,
    title: 'Canal View Prinsengracht',
    type: 'Apartment'
  },
  {
    bedrooms: 4,
    city: city,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      name: 'Angelina',
      isPro: true,
    },
    id: 4,
    images: photos,
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    price: 180,
    rating: 4.6,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment'
  },
  {
    bedrooms: 4,
    city: city,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      name: 'Angelina',
      isPro: true,
    },
    id: 5,
    images: photos,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.964309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/room.jpg',
    price: 80,
    rating: 3.7,
    title: 'Wood and stone place',
    type: 'Private room'
  }
];

export {offers};
