import Cookies from 'js-cookie';
import axios, { AxiosResponse } from 'axios';
import { ApiParams } from './types';

export default function apiCaller<T>({ method = 'get', route, headers = {}, data }: ApiParams): Promise<T[] | null> {
  const accessToken = Cookies.get('accessToken');
  const defaultHeader = { 'Content-Type': 'application/json', Accept: 'application/json' };
  const authorizationHeader = accessToken ? { Authorization: accessToken } : {};
  return axios(process.env.REACT_APP_BACKEND_URL + route, {
    method,
    headers: {
      ...defaultHeader,
      ...authorizationHeader,
      ...headers,
    },
    data: data ? JSON.stringify(data) : null,
  }).then((response: AxiosResponse) => response.data);
}
