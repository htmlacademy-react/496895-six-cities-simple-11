type User = {
  img: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  name: string;
  isPro?: boolean;
}

type Review = {
  id: string;
  user: User;
  rating: number;
  text: string;
  date: string;
}

type Photos = {
  src: string;
  alt: string;
  key: string;
}[]

type Insides = {
  key: string;
  value: string;
}[]

type Offer = {
  id: string;
  isPremium: boolean;
  img: {
    src: string;
    width: number | string;
    height: number | string;
    alt: string;
  };
  price: number | string;
  rating: number;
  name: string;
  type: string;
  bedroomsCount: number;
  adultsCount: number;
  photos: Photos;
  capacity: number;
  insides: Insides;
  user: User;
  descriptionParagraphs: string[];
  reviews: Review[];
}

export type {Review, Photos, Offer, Insides};
