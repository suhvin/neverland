import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCBHYg_ycanpIPfmaJjN341CgW1owxp5eo",
  authDomain: "ds-land.firebaseapp.com",
  projectId: "ds-land",
  storageBucket: "ds-land.appspot.com",
  messagingSenderId: "708695624333",
  appId: "1:708695624333:web:173fdfcdda6d2e499170c4",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();

export default firebase;
