// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyADw37TgSwkVjeF6P78Oz7kGx9Hw-LnWSg",
  authDomain: "artify-391906.firebaseapp.com",
  projectId: "artify-391906",
  storageBucket: "artify-391906.appspot.com",
  messagingSenderId: "994718853091",
  appId: "1:994718853091:web:b487cd9a9d1660bc0fa2d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);