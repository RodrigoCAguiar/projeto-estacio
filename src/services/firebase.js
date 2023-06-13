// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from "firebase";

//import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5ubsh0F2v83XIUortCkAi1SIqFxa2lho",
  authDomain: "projetoestacio-e36e3.firebaseapp.com",
  projectId: "projetoestacio-e36e3",
  storageBucket: "projetoestacio-e36e3.appspot.com",
  messagingSenderId: "623607593727",
  appId: "1:623607593727:web:843733b05268b2b34f6aca"
};

// Initialize Firebase
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const auth = firebase.auth();
const banco = firebase.firestore();

export { auth };
export { banco };

