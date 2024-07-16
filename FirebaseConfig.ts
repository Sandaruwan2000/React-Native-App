// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7i2U4oLui_1DTDZyqRDhY8Y2ofh6eaG4",
  authDomain: "reactnative-a3c40.firebaseapp.com",
  projectId: "reactnative-a3c40",
  storageBucket: "reactnative-a3c40.appspot.com",
  messagingSenderId: "97941966927",
  appId: "1:97941966927:web:aa59077e9c53d78be9da3a"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB= getFirestore(FIREBASE_APP);
