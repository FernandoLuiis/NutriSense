import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDI3oAJ08RZj20vzEGIPv61wyu49KX4NP8",
  authDomain: "nutrisense-5abcd.firebaseapp.com",
  projectId: "nutrisense-5abcd",
  storageBucket: "nutrisense-5abcd.appspot.com",
  messagingSenderId: "90428145815",
  appId: "1:90428145815:web:aec5d5fe9b11c82d19e9d2",
  measurementId: "G-5FB6HN7B66"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
