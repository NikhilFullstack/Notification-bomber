// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const {getAuth, GoogleAuthProvider} = require('firebase/auth');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// const admin = require('firebase-admin');

// const serviceAccount = require('../friendify-b1bea-firebase-adminsdk-aqu5z-c17925718e.json');
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// })
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
exports.auth = getAuth(app);
exports.googleProvider = new GoogleAuthProvider();