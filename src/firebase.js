import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsYzPZscCGD1V72K2ELcnf7N3PpARvTls",
  authDomain: "linkedin-clone-v1-3b7f4.firebaseapp.com",
  projectId: "linkedin-clone-v1-3b7f4",
  storageBucket: "linkedin-clone-v1-3b7f4.appspot.com",
  messagingSenderId: "804222972693",
  appId: "1:804222972693:web:09e2201968cb1a8578ef1c",
  measurementId: "G-VKH1K1FXJF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;
