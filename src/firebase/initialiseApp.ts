// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEsvG9kcB9v0VDgNHwNBkg5COp0Z-piu0",
  authDomain: "smart-budget-pixel5.firebaseapp.com",
  projectId: "smart-budget-pixel5",
  storageBucket: "smart-budget-pixel5.appspot.com",
  messagingSenderId: "671491530059",
  appId: "1:671491530059:web:520f5cd1afeecb8294dcce"
};
 
// Initialize Firebase
const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
