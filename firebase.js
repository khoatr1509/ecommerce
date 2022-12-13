// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1QiDXyq1RzuOSAg8P0_pJUCdIKuH97xA",
  authDomain: "pip-hac-uncle.firebaseapp.com",
  projectId: "pip-hac-uncle",
  storageBucket: "pip-hac-uncle.appspot.com",
  messagingSenderId: "205972163662",
  appId: "1:205972163662:web:ba9b7fe359a45c60aec71f",
  measurementId: "G-98HFLGLZNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;