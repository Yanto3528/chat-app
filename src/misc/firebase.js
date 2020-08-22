import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyB3sqHa7dh7hWzRw65wK4FmdNLSrmVRV7w",
  authDomain: "marioplan-78f63.firebaseapp.com",
  databaseURL: "https://marioplan-78f63.firebaseio.com",
  projectId: "marioplan-78f63",
  storageBucket: "marioplan-78f63.appspot.com",
  messagingSenderId: "16686255660",
  appId: "1:16686255660:web:0a28e2ad0aa00a1ecf8b89",
  measurementId: "G-WD8NJX5V3S",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
