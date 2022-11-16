import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB2EcqDqzcD2pHdcDnwxSikf3fSrx9jfzE",
  authDomain: "circular-tech.firebaseapp.com",
  projectId: "circular-tech",
  storageBucket: "circular-tech.appspot.com",
  messagingSenderId: "348873045350",
  appId: "1:348873045350:web:6b7b788c42f7a00a6284a7",
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const auth = getAuth(app);
