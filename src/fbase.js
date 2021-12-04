import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUfFUxejCk23-VkTRw7ZVVPIzsaQmN7XQ",
  authDomain: "nwitter-cb2ab.firebaseapp.com",
  projectId: "nwitter-cb2ab",
  storageBucket: "nwitter-cb2ab.appspot.com",
  messagingSenderId: "793212489131",
  appId: "1:793212489131:web:b7cd11718551a7490556ee",
};

const firebaseApp = initializeApp(firebaseConfig);

export const authService = getAuth(firebaseApp);
export const dbService = getFirestore();
export const storageService = getStorage();
