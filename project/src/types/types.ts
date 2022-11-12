type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
}

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type City = {
  location: Location;
  name: string;
}

type Offer = {
  bedrooms: number;
  city: {
    location: Location;
    name: string;
  };
  description: string;
  goods: string[];
  host: User;
  id: number;
  images: string[];
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type {Review, Offer, City, Location};
