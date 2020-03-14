import React from 'react';
import homepageSaga from './saga';
import { useInjectSaga } from '../../utils/injectSaga';
import HomepageContainer from './containers/Homepage';

export default function Homepage() {
  useInjectSaga({ key: 'homepage', saga: homepageSaga });
  return <HomepageContainer />;
}
