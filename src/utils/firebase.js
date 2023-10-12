// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs_nCEv-cKEBFjlGmPDgmNRznyshrrHi0",
  authDomain: "netflix-gpt-ea1d9.firebaseapp.com",
  projectId: "netflix-gpt-ea1d9",
  storageBucket: "netflix-gpt-ea1d9.appspot.com",
  messagingSenderId: "719824761051",
  appId: "1:719824761051:web:34304e5d2019b41afd5cfe",
  measurementId: "G-CB2B0WJ1DG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();