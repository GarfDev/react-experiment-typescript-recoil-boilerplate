import React from 'react';
import { Route } from 'react-router-dom';
const LoginPage = React.lazy(() => import('./containers/Login'));

export default function LoginPageRoute() {
  return <Route path="/login" component={LoginPage} />;
}
