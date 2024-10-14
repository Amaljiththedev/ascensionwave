// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7Xv6DwNvOmFNAfSmV7qWt9C1lS3vrIfY",
  authDomain: "ascensionwave-6456e.firebaseapp.com",
  projectId: "ascensionwave-6456e",
  storageBucket: "ascensionwave-6456e.appspot.com",
  messagingSenderId: "960368419248",
  appId: "1:960368419248:web:1088a92172af80a829b675",
  measurementId: "G-45WT1PJPNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);