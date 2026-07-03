// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFQw2e6ejO9Is0e_RsA8RzA-X5xtkvIXo",
  authDomain: "ai-portfolio-critic.firebaseapp.com",
  projectId: "ai-portfolio-critic",
  storageBucket: "ai-portfolio-critic.firebasestorage.app",
  messagingSenderId: "112136955293",
  appId: "1:112136955293:web:39d2f91af2fe0f62f2bb74",
  measurementId: "G-FPJ8MX0VGP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
