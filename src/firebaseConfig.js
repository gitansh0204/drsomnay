import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZGp5VGummvE-j37TNWWXHJtWfl4iLHG0",
  authDomain: "drkaumudi-5685b.firebaseapp.com",
  projectId: "drkaumudi-5685b",
  storageBucket: "drkaumudi-5685b.appspot.com",
  messagingSenderId: "310703896593",
  appId: "1:310703896593:web:99fed61abda146d4ff59b0",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
