import FirebaseContext from './firebaseContext';
import { useContext } from 'react';

export default function useFirebase() {
  return useContext(FirebaseContext);
}
