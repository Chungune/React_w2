// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt0FqSn97pfdNF0Do8IFOeV4A12taojjw",
  authDomain: "my-dictionary-95e06.firebaseapp.com",
  projectId: "my-dictionary-95e06",
  storageBucket: "my-dictionary-95e06.appspot.com",
  messagingSenderId: "1022981987541",
  appId: "1:1022981987541:web:0d9ceb68c3e344eaa6165c",
  measurementId: "G-005FBZ7LT5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

