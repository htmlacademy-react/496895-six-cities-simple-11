type TUser = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

type TReview = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: TUser;
}

type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type TCity = {
  location: TLocation;
  name: string;
}

type TOffer = {
  bedrooms: number;
  city: {
    location: TLocation;
    name: string;
  };
  description: string;
  goods: string[];
  host: TUser;
  id: number;
  images: string[];
  isPremium: boolean;
  location: TLocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type {TReview, TOffer, TCity, TLocation};
