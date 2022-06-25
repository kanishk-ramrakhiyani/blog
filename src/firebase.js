// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6Dz07Gi8t-norXepkkDHz3IJ-pTpytgI",
  authDomain: "blog-829c6.firebaseapp.com",
  projectId: "blog-829c6",
  storageBucket: "blog-829c6.appspot.com",
  messagingSenderId: "475445240935",
  appId: "1:475445240935:web:66b2efb33b9a861781e0c2",
  measurementId: "G-BHD53BS41S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const provider= new GoogleAuthProvider();
export const db=getFirestore(app);