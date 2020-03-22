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

// eslint-disable-next-line max-len
export const hostRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)([a-z0-9]+([\-\.]{1}[a-z0-9]+)*)\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

export const TikiRegexs = {
  titleRegex: /<meta property="(?:.*?)title(?:.*?)" content="(.*?)"/,
  priceRegex: /<span id="(?:.*?)price(?:.*?)">(.*?)</,
  imageRegex: /https:\/\/salt\.tikicdn\.com\/cache\/550x550\/ts\/product\/(?:.*?)\.jpg/,
};
