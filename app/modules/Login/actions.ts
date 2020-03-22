import { CurrentUser } from './../@core/Session/types';
import { action } from 'typesafe-actions';
import { User } from 'firebase';
import ActionTypes from './actionTypes';

export const logUserIn = (username: string, password: string, callback: (response: any) => void) => {
  return action(ActionTypes.LOG_USER_IN, {
    username,
    password,
    callback,
  });
};

export const logUserInSuccess = (currentUser: User) => {
  return action(ActionTypes.LOG_USER_IN_SUCCESS, {
    currentUser,
  });
};
