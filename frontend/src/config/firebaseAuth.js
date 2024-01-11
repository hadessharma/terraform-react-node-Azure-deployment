import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//Deep
// const firebaseConfig = {
//   apiKey: "AIzaSyBx3UnqjO-FfyhUgZ47tT6X4M2c0cbYL3s",
//   authDomain: "terraform-web-platform.firebaseapp.com",
//   projectId: "terraform-web-platform",
//   storageBucket: "terraform-web-platform.appspot.com",
//   messagingSenderId: "832295286297",
//   appId: "1:832295286297:web:7b95b155edc265955d5c88",
// };

//Arif
const firebaseConfig = {
  apiKey: "AIzaSyBak1aQFw-tboqwu99gaYQz1fTZ9eLOysY",
  authDomain: "react-terraform.firebaseapp.com",
  projectId: "react-terraform",
  storageBucket: "react-terraform.appspot.com",
  messagingSenderId: "770769525625",
  appId: "1:770769525625:web:4294a95e27e8c89786ada8",
  measurementId: "G-6C0ZM66ZPJ",
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);
