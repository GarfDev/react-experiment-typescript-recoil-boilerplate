import React from 'react';
import { useDispatch } from 'react-redux';
import RootRouter from './route';
import { verifyPreviousSession } from '../@core/Session/actions';

export default function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(verifyPreviousSession());
  }, [dispatch]);

  return <RootRouter />;
}
