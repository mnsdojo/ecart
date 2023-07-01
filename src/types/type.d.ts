export interface Product {
  active: boolean;
  created: number;
  default_price: string;
  description: null;
  id: string;
  images: string[];
  livemode: boolean;
  name: string;
  object: string;
  type: string;
  unit_label: string;
  url: null;
  updated: number;
  tax_code: null;
}

interface ProductCardType {
  id: string;
  image: string;
  currency: string;
  name: string;
  price: string;
}
