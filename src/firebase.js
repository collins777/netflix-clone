import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflix-clone-ab4d1.firebaseapp.com",
  projectId: "netflix-clone-ab4d1",
  storageBucket: "netflix-clone-ab4d1.appspot.com",
  messagingSenderId: "552037460625",
  appId: "1:552037460625:web:70f347573784e941ed6d30",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
