// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEUbaA4IEEagNMErJo_PUnVlG5sBkJFqU",
    authDomain: "learning-with-asd.firebaseapp.com",
    projectId: "learning-with-asd",
    storageBucket: "learning-with-asd.appspot.com",
    messagingSenderId: "217342814375",
    appId: "1:217342814375:web:1a95ee566719a6f5fc9382"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;