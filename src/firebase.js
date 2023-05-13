// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfiaYrZm-ERvsPnFunowPp2kU_Io5uVsM",
  authDomain: "project-9f604.firebaseapp.com",
  projectId: "project-9f604",
  storageBucket: "project-9f604.appspot.com",
  messagingSenderId: "64389164131",
  appId: "1:64389164131:web:a5089a4de64b04b64a1c56",
  measurementId: "G-R54V16VQKT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
