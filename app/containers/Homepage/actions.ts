import { action } from 'typesafe-actions';
import ActionTypes from './actionTypes';

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
