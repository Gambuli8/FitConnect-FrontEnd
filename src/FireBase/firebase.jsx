// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCccPZqJjqhC-_ogqHnKHyERQM9tru7abg",
  authDomain: "fir-auth-fitconnect.firebaseapp.com",
  projectId: "fir-auth-fitconnect",
  storageBucket: "fir-auth-fitconnect.appspot.com",
  messagingSenderId: "425434439826",
  appId: "1:425434439826:web:cb7c08f517bcab5c0ec64b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
