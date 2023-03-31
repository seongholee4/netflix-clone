import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBk-IfR6tKBFgZ9UVH70-fb3jnXrx5EMWw",
  authDomain: "netflix-clone-fd763.firebaseapp.com",
  projectId: "netflix-clone-fd763",
  storageBucket: "netflix-clone-fd763.appspot.com",
  messagingSenderId: "793011366950",
  appId: "1:793011366950:web:43dd69f188f3869f6fcae7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;