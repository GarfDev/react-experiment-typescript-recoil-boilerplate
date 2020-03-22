import React from 'react';
import { useInjectSaga } from 'utils/injectSaga';
import LoginRoute from './route';
import LoginSaga from './saga';

export default function Homepage() {
  useInjectSaga({ key: 'login', saga: LoginSaga });
  return <LoginRoute />;
}
