import { GithubAuthProvider } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbUvj6AV0WP5QOaE1_2uijQd5NExJ2GH4",
  authDomain: "codetips-a6ec8.firebaseapp.com",
  projectId: "codetips-a6ec8",
  storageBucket: "codetips-a6ec8.appspot.com",
  messagingSenderId: "75603789621",
  appId: "1:75603789621:web:8462366f06462bfb3c6e7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const providerGithub = new GithubAuthProvider();
const db = getFirestore(app);

export { app, providerGithub, db };