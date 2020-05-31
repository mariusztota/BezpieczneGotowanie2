import { firebase } from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqih7YEH9bRfIbRZjbJDxY05Rb8wChNVU",
  authDomain: "projektdobry.firebaseapp.com",
  databaseURL: "https://projektdobry.firebaseio.com",
  projectId: "projektdobry",
  storageBucket: "projektdobry.appspot.com",
  messagingSenderId: "12216942975",
  appId: "1:12216942975:web:32bd640cfc525a218a9a4a",
  measurementId: "G-27Z4X2Q2XY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();