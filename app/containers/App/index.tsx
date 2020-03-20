import React from 'react';
import RootRouter from './route';
import { useInjectSaga } from '../../utils/injectSaga';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

export default function App() {
  useInjectSaga({ key: 'session', saga });
  useInjectReducer({ key: 'session', reducer });
  return <RootRouter />;
}
