import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import LoadingState from '../../global/components/LoadingState';
import HomepageRoute from '../Homepage/route';
import { useInjectSaga } from '../../utils/injectSaga';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

export default function App() {
  useInjectSaga({ key: 'session', saga });
  useInjectReducer({ key: 'session', reducer });
  return (
    <Suspense fallback={<LoadingState />}>
      <Route exact path="/" component={HomepageRoute} />
    </Suspense>
  );
}
