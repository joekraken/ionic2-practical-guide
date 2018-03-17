import firebase from 'firebase';

export class AuthService {
  signup(email: string, password: string) {
    // returns a Promise obj
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
}
