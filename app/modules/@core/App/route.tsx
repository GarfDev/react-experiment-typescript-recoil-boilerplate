import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import LoadingState from '../../../global/components/LoadingState';
// Import Resources
import Streamer from '../../Streamer';

export default function RootRouter() {
  return (
    <Suspense fallback={<LoadingState />}>
      <Route exact path="/" component={Streamer} />
    </Suspense>
  );
}
