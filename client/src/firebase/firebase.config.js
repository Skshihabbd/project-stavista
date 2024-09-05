

// export const app = initializeApp(firebaseConfig)

// this is my function.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWeFZd_cme5xe1DBRedsoZas91wHdioS8",
  authDomain: "airbnb-cdefa.firebaseapp.com",
  projectId: "airbnb-cdefa",
  storageBucket: "airbnb-cdefa.appspot.com",
  messagingSenderId: "791830727764",
  appId: "1:791830727764:web:9e5cdb827061434cad71c1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
