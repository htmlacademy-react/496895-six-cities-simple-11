import {Review, Photos, Offer, Insides} from '../types/types';

const review: Review = {
  id: '1',
  user: {
    img: {
      src: 'img/avatar-max.jpg',
      width: 54,
      height: 54,
      alt: 'Reviews avatar'
    },
    name: 'Max',
  },
  rating: 4,
  text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  date: '2019-04-24'
};

const photos: Photos = [
  {
    src: 'img/room.jpg',
    alt: 'Place image',
    key: '1'
  },
  {
    src: 'img/apartment-01.jpg',
    alt: 'Place image',
    key: '2'
  },
  {
    src: 'img/apartment-02.jpg',
    alt: 'Place image',
    key: '3'
  },
  {
    src: 'img/apartment-03.jpg',
    alt: 'Place image',
    key: '4'
  },
  {
    src: 'img/studio-01.jpg',
    alt: 'Place image',
    key: '5'
  },
  {
    src: 'img/apartment-01.jpg',
    alt: 'Place image',
    key: '6'
  }
];

const insides: Insides = [{value: 'Wi-Fi', key: '1'}, {value: 'Washing machine', key: '2'}, {value: 'Towels', key: '3'}, {value: 'Heating', key: '4'}, {value: 'Coffee machine', key: '5'}, {value: 'Baby seat', key: '6'}, {value: 'Kitchen', key: '7'}, {value: 'Dishwasher', key: '8'}, {value: 'Cabel TV', key: '9'}];

const offers: Offer[] = [
  {
    id: '1',
    isPremium: true,
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
    bedroomsCount: 4,
    adultsCount: 4,
    photos: photos,
    capacity: 4,
    insides: insides,
    user: {
      img: {
        src: 'img/avatar-angelina.jpg',
        width: 74,
        height: 74,
        alt: 'Host avatar'
      },
      name: 'Angelina',
      isPro: true,
    },
    descriptionParagraphs: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'],
    reviews: [review],
  },
  {
    id: '2',
    isPremium: false,
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
    bedroomsCount: 4,
    adultsCount: 4,
    photos: photos,
    capacity: 4,
    insides: insides,
    user: {
      img: {
        src: 'img/avatar-angelina.jpg',
        width: 74,
        height: 74,
        alt: 'Host avatar'
      },
      name: 'Angelina',
      isPro: true,
    },
    descriptionParagraphs: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'],
    reviews: [review]
  },
  {
    id: '3',
    isPremium: false,
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
    bedroomsCount: 4,
    adultsCount: 4,
    photos: photos,
    capacity: 4,
    insides: insides,
    user: {
      img: {
        src: 'img/avatar-angelina.jpg',
        width: 74,
        height: 74,
        alt: 'Host avatar'
      },
      name: 'Angelina',
      isPro: true,
    },
    descriptionParagraphs: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'],
    reviews: [review]
  },
  {
    id: '4',
    isPremium: true,
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
    bedroomsCount: 4,
    adultsCount: 4,
    photos: photos,
    capacity: 4,
    insides: insides,
    user: {
      img: {
        src: 'img/avatar-angelina.jpg',
        width: 74,
        height: 74,
        alt: 'Host avatar'
      },
      name: 'Angelina',
      isPro: true,
    },
    descriptionParagraphs: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'],
    reviews: [review]
  },
  {
    id: '5',
    isPremium: false,
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
    bedroomsCount: 4,
    adultsCount: 4,
    photos: photos,
    capacity: 4,
    insides: insides,
    user: {
      img: {
        src: 'img/avatar-angelina.jpg',
        width: 74,
        height: 74,
        alt: 'Host avatar'
      },
      name: 'Angelina',
      isPro: true,
    },
    descriptionParagraphs: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'],
    reviews: [review]
  }
];

export {offers};
