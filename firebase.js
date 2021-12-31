// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3JIJY1XyAkk4WKIkRJBvaPC7iKfhGszE",
  authDomain: "authentication-recap-a67ca.firebaseapp.com",
  projectId: "authentication-recap-a67ca",
  storageBucket: "authentication-recap-a67ca.appspot.com",
  messagingSenderId: "956772773941",
  appId: "1:956772773941:web:24d5b5169f3551211e417c",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
