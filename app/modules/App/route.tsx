import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import LoadingState from '../../global/components/LoadingState';
import HomepageRoute from '../Homepage/route';
import LoginRoute from '../Login/route';

export default function RootRouter() {
  return (
    <Suspense fallback={<LoadingState />}>
      <Route exact path="/" component={HomepageRoute} />
      <Route exact path="/login" component={LoginRoute} />
    </Suspense>
  );
}
