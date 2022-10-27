type Offer = {
  id: number;
  mark?: string;
  img: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  price: number;
  rating: number;
  name: string;
  type: string;
}

export type {Offer}
