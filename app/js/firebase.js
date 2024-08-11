// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWgXPcR5NVIf_sovKnZ-g5dkJrp7cccXk",
  authDomain: "oklahoma-seance.firebaseapp.com",
  projectId: "oklahoma-seance",
  storageBucket: "oklahoma-seance.appspot.com",
  messagingSenderId: "12106851555",
  appId: "1:12106851555:web:62b3a8b55bbc2215e491d6",
  measurementId: "G-102GP9RLX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);