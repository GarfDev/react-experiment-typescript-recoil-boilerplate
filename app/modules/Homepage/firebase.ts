import { Firebase, googleProvider } from '../@core/Firebase';

export function handleGoogleLogin() {
  Firebase.auth().signInWithPopup(googleProvider);
  // .then(response => {
  //   console.log(response.credential);
  // });
}
