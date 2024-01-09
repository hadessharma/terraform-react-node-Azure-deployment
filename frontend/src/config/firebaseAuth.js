// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx3UnqjO-FfyhUgZ47tT6X4M2c0cbYL3s",
  authDomain: "terraform-web-platform.firebaseapp.com",
  projectId: "terraform-web-platform",
  storageBucket: "terraform-web-platform.appspot.com",
  messagingSenderId: "832295286297",
  appId: "1:832295286297:web:7b95b155edc265955d5c88",
};
// const admin = initializeApp(firebaseConfig);

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase)
