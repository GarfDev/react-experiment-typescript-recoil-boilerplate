import React from 'react';
import { LoginForm } from '../components/';
import { logUserIn } from '../actions';

export default function LoginPage() {
  return <LoginForm onSubmit={logUserIn} />;
}
