import React from 'react';
import { Route } from 'react-router-dom';
import HomepageRoute from '../Homepage/route';

export default function App() {
  return <Route exact path="/" component={HomepageRoute} />;
}
