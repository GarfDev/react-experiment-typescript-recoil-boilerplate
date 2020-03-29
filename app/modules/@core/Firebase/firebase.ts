import * as firebase from 'firebase';
import FirebaseConfig from './firebaseConfig';

firebase.initializeApp(FirebaseConfig);
// Detect Client Language
firebase.auth().useDeviceLanguage();

export default firebase;
