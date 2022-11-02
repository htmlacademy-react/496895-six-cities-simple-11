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
  user: User;
  rating: number;
  text: string;
  date: string;
}

type Photos = {
  src: string;
  alt: string;
}[]

type Offer = {
  id: string;
  mark?: string;
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
  photos: Photos;
  capacity: number;
  features: string[];
  user: User;
  description: string;
  reviews: Review[];
}

export type {Review, Photos, Offer};
