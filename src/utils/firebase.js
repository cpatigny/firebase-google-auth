// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEOfy2MJWuuy-Cu1vz3AeM66P8z-H5AEs",
  authDomain: "fir-auth-2c0da.firebaseapp.com",
  projectId: "fir-auth-2c0da",
  storageBucket: "fir-auth-2c0da.appspot.com",
  messagingSenderId: "71336643272",
  appId: "1:71336643272:web:afdd210bec2d73342b33fd"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
