import React from 'react';
import firebase from './firebase';
const FirebaseContext = React.createContext({} as typeof firebase);
export default FirebaseContext;
