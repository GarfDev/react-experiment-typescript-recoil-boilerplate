import { action } from 'typesafe-actions';
import { hostRegex } from './constants';
import { supportedHosts } from './types';
import ActionTypes from './actionTypes';

export const detectProductHost = (url: string, callback?: (response: any) => void) => {
  switch (hostRegex.exec(url)?.[2]) {
    case supportedHosts.TIKI:
      return action(ActionTypes.FETCH_TIKI_PRODUCT, {
        url,
        callback,
      });
    default:
      return action(ActionTypes.DETECT_PRODUCT_FAILED);
  }
};

export const fetchTikiProduct = (url: string, callback?: (response: any) => void) => {
  return action(ActionTypes.FETCH_TIKI_PRODUCT, {
    url,
    callback,
  });
};

export const fetchTikiProductSuccess = (response: any) => {
  const data = response.data;
  return action(ActionTypes.FETCH_TIKI_PRODUCT_SUCCESS, {
    data: data,
  });
};
