import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIIgxUOGaaNNdsmV_7BGxTAJ9W765hADo",
  authDomain: "mes23-website.firebaseapp.com",
  projectId: "mes23-website",
  storageBucket: "mes23-website.appspot.com",
  messagingSenderId: "256912136735",
  appId: "1:256912136735:web:6a82680fd4dfd70d0c532a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;