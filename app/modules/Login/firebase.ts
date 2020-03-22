import { Firebase } from '../@core/Firebase';

export const logUserIn = (email: string, password: string) => {
  return Firebase.auth().signInWithEmailAndPassword(email, password);
};
