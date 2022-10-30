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
}

export type {Offer};
