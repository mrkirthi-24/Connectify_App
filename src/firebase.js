import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsYzPZscCGD1V72K2ELcnf7N3PpARvTls",
  authDomain: "linkedin-clone-v1-3b7f4.firebaseapp.com",
  projectId: "linkedin-clone-v1-3b7f4",
  storageBucket: "linkedin-clone-v1-3b7f4.appspot.com",
  messagingSenderId: "804222972693",
  appId: "1:804222972693:web:09e2201968cb1a8578ef1c",
  measurementId: "G-VKH1K1FXJF",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
