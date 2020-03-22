export interface Product {
  title: string | undefined;
  price: string | undefined;
  imgURL: string | undefined;
  content?: string | undefined;
}

export enum supportedHosts {
  TIKI = 'tiki',
  SENDO = 'sendo',
  LAZADA = 'lazada',
  SHOPEE = 'shopee',
}
