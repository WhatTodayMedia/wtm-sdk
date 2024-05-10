"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = exports.db = exports.auth = exports.firebase = void 0;
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
const firestore_1 = require("firebase/firestore");
const storage_1 = require("firebase/storage");
const firebaseConfig = {
    apiKey: "AIzaSyB9xa1vW98HGC4cjbj2yS_W1Zak3zWvrDg",
    authDomain: "wtm-db.firebaseapp.com",
    projectId: "wtm-db",
    storageBucket: "wtm-db.appspot.com",
    messagingSenderId: "40444232041",
    appId: "1:40444232041:web:b9d5d3b3ba4e3bc4b8fdf8",
    measurementId: "G-6F79PHRFWK",
};
exports.firebase = (0, app_1.initializeApp)(firebaseConfig);
exports.auth = (0, auth_1.getAuth)(exports.firebase);
exports.db = (0, firestore_1.getFirestore)(exports.firebase);
exports.storage = (0, storage_1.getStorage)(exports.firebase);
