// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyA1_LcTqAaUivxpXGIsjsiPm1ZxQZOAJg0",
    authDomain: "catchup-c02dc.firebaseapp.com",
    projectId: "catchup-c02dc",
    storageBucket: "catchup-c02dc.appspot.com",
    messagingSenderId: "800445178912",
    appId: "1:800445178912:web:2aee1599dd3ffad4780845"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default db;