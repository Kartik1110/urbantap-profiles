 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_2dJ7wifLkgEdn6MI6Ef_RfYPVmYZo_g",
  authDomain: "urbantap-demo.firebaseapp.com",
  projectId: "urbantap-demo",
  storageBucket: "urbantap-demo.appspot.com",
  messagingSenderId: "1065211739330",
  appId: "1:1065211739330:web:1e60414820277eb1cf4f5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };