import { ProductInitialState } from './types';

export enum ApiConfig {
  CORS_BYBASS = 'https://cors-anywhere.herokuapp.com/',
}

/// Application Logic

export const productInitialState: ProductInitialState = {
  title: undefined,
  price: undefined,
  imgURL: undefined,
};
