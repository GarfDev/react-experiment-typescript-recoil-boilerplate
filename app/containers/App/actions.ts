import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const loadRepos = () => action(ActionTypes.LOGIN);
export const reposLoaded = (username: string) => action(ActionTypes.LOGIN_SUCCESS, { username: username });
export const repoLoadingError = (error: object) => action(ActionTypes.LOGIN_ERROR, error);
