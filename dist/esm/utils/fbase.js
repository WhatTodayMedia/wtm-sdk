import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyB9xa1vW98HGC4cjbj2yS_W1Zak3zWvrDg",
    authDomain: "wtm-db.firebaseapp.com",
    projectId: "wtm-db",
    storageBucket: "wtm-db.appspot.com",
    messagingSenderId: "40444232041",
    appId: "1:40444232041:web:b9d5d3b3ba4e3bc4b8fdf8",
    measurementId: "G-6F79PHRFWK",
};
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase);
export const storage = getStorage(firebase);
