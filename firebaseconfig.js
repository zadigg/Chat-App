// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLNwlyjcnOQxLD7vaV-nePBYCj5XGLk8M",
  authDomain: "chatapp-abcbc.firebaseapp.com",
  projectId: "chatapp-abcbc",
  storageBucket: "chatapp-abcbc.appspot.com",
  messagingSenderId: "109047449236",
  appId: "1:109047449236:web:fec7947683781bb7729681",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
