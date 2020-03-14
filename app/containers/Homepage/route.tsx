import React from 'react';
import { Route } from 'react-router-dom';
import { useInjectSaga } from '../../utils/injectSaga';
import homepageSaga from './saga';
const Homepage = React.lazy(() => import('./index'));

export default function HomePageRoute() {
  useInjectSaga({ key: 'homepage', saga: homepageSaga });
  return <Route exact path="/" component={Homepage} />;
}
