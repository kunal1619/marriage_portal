// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAMeJxPKwYc8Sm8mHGC8HN0EUFaIy4yTsg",
  authDomain: "marriage-portal-b1ecb.firebaseapp.com",
  projectId: "marriage-portal-b1ecb",
  storageBucket: "marriage-portal-b1ecb.appspot.com",
  messagingSenderId: "663042243850",
  appId: "1:663042243850:web:a3581f6d6cd5367447cef3",
  measurementId: "G-RKQCRTCJKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const fireStore = getFirestore(app);
const storage = getStorage(app);
export default app
export {fireStore, storage}