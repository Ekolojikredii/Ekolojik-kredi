// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-R_6g3EKuYztt0wamppvp7Z-dofMKerA",
  authDomain: "ekolojik-kredi-f3331.firebaseapp.com",
  projectId: "ekolojik-kredi-f3331",
  storageBucket: "ekolojik-kredi-f3331.firebasestorage.app",
  messagingSenderId: "357324156039",
  appId: "1:357324156039:web:6251304f64a295344b5c22",
  measurementId: "G-G3BJB3F3PM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
