import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
const Homepage = React.lazy(() => import('./index'));

export default function HomePageRoute() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route exact path="/" component={Homepage} />
    </Suspense>
  );
}
