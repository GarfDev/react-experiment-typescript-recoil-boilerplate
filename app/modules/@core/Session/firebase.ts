import { Firebase } from '../../@core/Firebase/';

export const logUserOut = () => {
  return Firebase.auth().signOut();
};

export const verifySession = () => {
  return Firebase.auth().currentUser;
};
