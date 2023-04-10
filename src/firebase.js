// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVuVkulZkhP6ZGtOetg9gNq3HDm2bSN8M",
  authDomain: "clone-dbc67.firebaseapp.com",
  projectId: "clone-dbc67",
  storageBucket: "clone-dbc67.appspot.com",
  messagingSenderId: "99094345308",
  appId: "1:99094345308:web:a346be22f0dcb35ab59899",
  measurementId: "G-PNT229ZYXX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// the database
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
