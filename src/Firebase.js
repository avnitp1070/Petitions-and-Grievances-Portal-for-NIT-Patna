// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { getFirestore, collection, onSnapshot, doc, getDoc, updateDoc, addDoc, deleteDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZjWkBH_GeloPds7Kt-4KeVFVGfnsrG0c",
  authDomain: "petitions-app.firebaseapp.com",
  projectId: "petitions-app",
  storageBucket: "petitions-app.appspot.com",
  messagingSenderId: "617203175205",
  appId: "1:617203175205:web:e80441799291d5bd9114cc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { app, auth, provider, signInWithPopup ,db, collection, onSnapshot, doc, getDoc, updateDoc, addDoc, deleteDoc };