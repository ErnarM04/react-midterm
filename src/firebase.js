// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbk5EHcQRQk_sJ6qJFhY1NZ3qk5ilKiEE",
  authDomain: "fake-shop-afb86.firebaseapp.com",
  projectId: "fake-shop-afb86",
  storageBucket: "fake-shop-afb86.firebasestorage.app",
  messagingSenderId: "284992067917",
  appId: "1:284992067917:web:84ec9900d7b4500b8a7f04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);