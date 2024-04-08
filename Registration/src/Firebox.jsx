// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdS5Z0082HvWzWT_7rzO1zf7mh6J_xL30",
  authDomain: "register-dcb44.firebaseapp.com",
  projectId: "register-dcb44",
  storageBucket: "register-dcb44.appspot.com",
  messagingSenderId: "665701157333",
  appId: "1:665701157333:web:0142f7dc240c2bc462d55c"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export { auth };
