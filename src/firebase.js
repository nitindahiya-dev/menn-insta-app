// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "menn-insta-app.firebaseapp.com",
  projectId: "menn-insta-app",
  storageBucket: "menn-insta-app.appspot.com",
  messagingSenderId: "604443241567",
  appId: "1:604443241567:web:7250ae362ae22f3a573fea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);