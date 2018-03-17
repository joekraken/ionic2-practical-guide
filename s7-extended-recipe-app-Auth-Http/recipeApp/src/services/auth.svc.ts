import firebase from 'firebase';

export class AuthService {
  signup(email: string, password: string) {
    // an http req returns a Promise obj
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
  signin(email: string, password: string) {
    // an http req returns a Promise obj
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logout() {
    firebase.auth().signOut(); //logout and delete user's token
  }
}
