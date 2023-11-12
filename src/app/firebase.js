// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf_ve4s1Hxf23VJgouFHnyn8V-sEnsHy8",
  authDomain: "e-lol-b9973.firebaseapp.com",
  projectId: "e-lol-b9973",
  storageBucket: "e-lol-b9973.appspot.com",
  messagingSenderId: "346330251861",
  appId: "1:346330251861:web:86fda1eaa11e2fc707cadc",
  measurementId: "G-G9Z86QBN0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
