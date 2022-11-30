import {TCity, TOffer} from '../types/types';

const photos: string[] = ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'];

const goods: string[] = ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV'];

const description = 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.';

const paris: TCity = {
  location: {
    latitude: 48.8534,
    longitude: 2.3488,
    zoom: 11,
  },
  name: 'Paris'
};

const cologne: TCity = {
  location: {
    latitude: 50.9333,
    longitude: 6.95,
    zoom: 11,
  },
  name: 'Cologne'
};

const brussels: TCity = {
  location: {
    latitude: 50.8504,
    longitude: 4.34878,
    zoom: 11,
  },
  name: 'Brussels'
};

const amsterdam: TCity = {
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 11,
  },
  name: 'Amsterdam'
};

const hamburg: TCity = {
  location: {
    latitude: 53.5753,
    longitude: 10.0153,
    zoom: 11,
  },
  name: 'Hamburg'
};

const dusseldorf: TCity = {
  location: {
    latitude: 51.2217,
    longitude: 6.77616,
    zoom: 11,
  },
  name: 'Dusseldorf'
};

const offersByAmsterdam: TOffer[] = [
  {
    bedrooms: 4,
    city: amsterdam,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,

      name: 'Angelina',
      email: '',
      token: '',
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
    city: amsterdam,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,

      name: 'Angelina',
      email: '',
      token: '',
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
    city: amsterdam,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,

      name: 'Angelina',
      email: '',
      token: '',
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
    city: amsterdam,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,

      name: 'Angelina',
      email: '',
      token: '',
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
    city: amsterdam,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,

      name: 'Angelina',
      email: '',
      token: '',
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
    title: 'Wood and stone place ',
    type: 'Private room'
  }
];

const offersByParis: TOffer[] = [
  {
    bedrooms: 4,
    city: paris,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,

      name: 'Angelina',
      email: '',
      token: '',
      isPro: true,
    },
    id: 6,
    images: photos,
    isPremium: true,
    location: {
      latitude: 48.8709553943508,
      longitude: 2.36309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.3,
    title: 'Beautiful & luxurious apartment at great location in Paris',
    type: 'Apartment'
  },
  {
    bedrooms: 4,
    city: paris,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,

      name: 'Angelina',
      email: '',
      token: '',
      isPro: true,
    },
    id: 7,
    images: photos,
    isPremium: false,
    location: {
      latitude: 48.8334753953508,
      longitude: 2.32879666416198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/room.jpg',
    price: 80,
    rating: 3.8,
    title: 'Wood and stone place in Paris',
    type: 'Private room'
  },
  {
    bedrooms: 4,
    city: paris,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,

      name: 'Angelina',
      email: '',
      token: '',
      isPro: true,
    },
    id: 8,
    images: photos,
    isPremium: false,
    location: {
      latitude: 48.8534553923508,
      longitude: 2.348809666506198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    rating: 4.1,
    title: 'Canal View Prinsengracht in Paris',
    type: 'Apartment'
  }
];

const offersByCologne: TOffer[] = [
  {
    bedrooms: 4,
    city: cologne,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,

      name: 'Angelina',
      email: '',
      token: '',
      isPro: true,
    },
    id: 9,
    images: photos,
    isPremium: true,
    location: {
      latitude: 50.9333553943508,
      longitude: 6.95889666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.3,
    title: 'Beautiful & luxurious apartment at great location in Cologne',
    type: 'Apartment'
  },
  {
    bedrooms: 4,
    city: cologne,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,

      name: 'Angelina',
      email: '',
      token: '',
      isPro: true,
    },
    id: 10,
    images: photos,
    isPremium: false,
    location: {
      latitude: 50.9453553943508,
      longitude: 6.96989666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/room.jpg',
    price: 80,
    rating: 3.8,
    title: 'Wood and stone place in Cologne',
    type: 'Private room'
  },
  {
    bedrooms: 4,
    city: cologne,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,

      name: 'Angelina',
      email: '',
      token: '',
      isPro: true,
    },
    id: 11,
    images: photos,
    isPremium: false,
    location: {
      latitude: 50.9433553943508,
      longitude: 6.948809666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    rating: 4.1,
    title: 'Canal View Prinsengracht in Cologne',
    type: 'Apartment'
  }
];

const offersByBrussels: TOffer[] = [
  {
    bedrooms: 4,
    city: brussels,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,

      name: 'Angelina',
      email: '',
      token: '',
      isPro: true,
    },
    id: 12,
    images: photos,
    isPremium: true,
    location: {
      latitude: 50.8704553943508,
      longitude: 4.368789666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.3,
    title: 'Beautiful & luxurious apartment at great location in Brussels',
    type: 'Apartment'
  },
  {
    bedrooms: 4,
    city: brussels,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,

      name: 'Angelina',
      email: '',
      token: '',
      isPro: true,
    },
    id: 13,
    images: photos,
    isPremium: false,
    location: {
      latitude: 50.8404553943508,
      longitude: 4.338789666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/room.jpg',
    price: 80,
    rating: 3.8,
    title: 'Wood and stone place in Brussels',
    type: 'Private room'
  },
  {
    bedrooms: 4,
    city: brussels,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,

      name: 'Angelina',
      email: '',
      token: '',
      isPro: true,
    },
    id: 14,
    images: photos,
    isPremium: false,
    location: {
      latitude: 50.8204553943508,
      longitude: 4.3487809666406,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    rating: 4.1,
    title: 'Canal View Prinsengracht in Brussels',
    type: 'Apartment'
  }
];

const offersByHamburg: TOffer[] = [
  {
    bedrooms: 4,
    city: hamburg,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,

      name: 'Angelina',
      email: '',
      token: '',
      isPro: true,
    },
    id: 15,
    images: photos,
    isPremium: true,
    location: {
      latitude: 53.5553553943508,
      longitude: 10.0653896664061,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.3,
    title: 'Beautiful & luxurious apartment at great location in Hamburg',
    type: 'Apartment'
  },
  {
    bedrooms: 4,
    city: hamburg,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,

      name: 'Angelina',
      email: '',
      token: '',
      isPro: true,
    },
    id: 16,
    images: photos,
    isPremium: false,
    location: {
      latitude: 53.5853553943508,
      longitude: 10.0453896664068,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/room.jpg',
    price: 80,
    rating: 3.8,
    title: 'Wood and stone place in Hamburg',
    type: 'Private room'
  },
  {
    bedrooms: 4,
    city: hamburg,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,

      name: 'Angelina',
      email: '',
      token: '',
      isPro: true,
    },
    id: 17,
    images: photos,
    isPremium: false,
    location: {
      latitude: 53.5753553943508,
      longitude: 10.0153809666401,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    rating: 4.1,
    title: 'Canal View Prinsengracht in Hamburg',
    type: 'Apartment'
  }
];

const offersByDusseldorf: TOffer[] = [
  {
    bedrooms: 4,
    city: dusseldorf,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,

      name: 'Angelina',
      email: '',
      token: '',
      isPro: true,
    },
    id: 18,
    images: photos,
    isPremium: true,
    location: {
      latitude: 51.2317553943508,
      longitude: 6.75616896664061,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.3,
    title: 'Beautiful & luxurious apartment at great location in Dusseldorf',
    type: 'Apartment'
  },
  {
    bedrooms: 4,
    city: dusseldorf,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,

      name: 'Angelina',
      email: '',
      token: '',
      isPro: true,
    },
    id: 19,
    images: photos,
    isPremium: false,
    location: {
      latitude: 51.2016553943508,
      longitude: 6.79316896664068,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/room.jpg',
    price: 80,
    rating: 3.8,
    title: 'Wood and stone place in Dusseldorf',
    type: 'Private room'
  },
  {
    bedrooms: 4,
    city: dusseldorf,
    description: description,
    goods: goods,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,

      name: 'Angelina',
      email: '',
      token: '',
      isPro: true,
    },
    id: 20,
    images: photos,
    isPremium: false,
    location: {
      latitude: 51.2217553943508,
      longitude: 6.776168096664098,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    rating: 4.1,
    title: 'Canal View Prinsengracht in Dusseldorf',
    type: 'Apartment'
  }
];

const offers: TOffer[] = [
  ...offersByAmsterdam,
  ...offersByParis,
  ...offersByCologne,
  ...offersByBrussels,
  ...offersByHamburg,
  ...offersByDusseldorf
];

export {offers};
