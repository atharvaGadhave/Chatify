import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3NDIwm-XUdvvYZXRJKy_ezJRdmNQ9l7M",
  authDomain: "chatify-final.firebaseapp.com",
  projectId: "chatify-final",
  storageBucket: "chatify-final.appspot.com",
  messagingSenderId: "782574333985",
  appId: "1:782574333985:web:62c1b7c9a3bc5ac8277360"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
