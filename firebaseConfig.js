// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4GG6P4tAg5vexuxhF1fuKw5GTpI7bhGA",
  authDomain: "eyosi18-a2b9e.firebaseapp.com",
  projectId: "eyosi18-a2b9e",
  storageBucket: "eyosi18-a2b9e.firebasestorage.app",
  messagingSenderId: "342746350825",
  appId: "1:342746350825:web:c4f4759583c074dabc9c78",
  measurementId: "G-5HVH0EW05C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
