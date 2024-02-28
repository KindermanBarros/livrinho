// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import the getAuth function
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdAsxjGpT99MsMQmqDxs2t3Gy1xJBe2Zc",
  authDomain: "livrinho-8b503.firebaseapp.com",
  projectId: "livrinho-8b503",
  storageBucket: "livrinho-8b503.appspot.com",
  messagingSenderId: "1098242536334",
  appId: "1:1098242536334:web:7f29542b9adf4366eb6adf",
  measurementId: "G-DP3HQ90HTS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Auth

export { auth }; // Export the auth object