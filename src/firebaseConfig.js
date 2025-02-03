// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNkp1pxofm2tF2t3cVQmV_wJv9MV8GE_0",
  authDomain: "sutta-com.firebaseapp.com",
  databaseURL: "https://sutta-com-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "sutta-com",
  storageBucket: "sutta-com.firebasestorage.app",
  messagingSenderId: "853326879611",
  appId: "1:853326879611:web:57a58dbb4db57287a5bbde",
  measurementId: "G-3YKNHMF350"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app)
export const auth = getAuth(app);