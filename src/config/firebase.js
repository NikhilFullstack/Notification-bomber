// Import the functions you need from the SDKs you need
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWuo3nxBvNwwWQr9mZne2dLa81xi9_jYU",
  authDomain: "friendify-b1bea.firebaseapp.com",
  projectId: "friendify-b1bea",
  storageBucket: "friendify-b1bea.appspot.com",
  messagingSenderId: "391138750229",
  appId: "1:391138750229:web:4760a9fd4f64374d6d831c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const messaging = getMessaging(app)

export const googleProvider = new GoogleAuthProvider();