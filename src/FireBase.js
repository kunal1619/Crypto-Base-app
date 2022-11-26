// Import the functions you need from the SDKs you need
import "firebase/auth"
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkffmsFD4my76-g6m_xNRlS22WCu44nug",
  authDomain: "crypto-base-35739.firebaseapp.com",
  projectId: "crypto-base-35739",
  storageBucket: "crypto-base-35739.appspot.com",
  messagingSenderId: "98127143311",
  appId: "1:98127143311:web:ddeaa8206eccadcdacebfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

export default app;