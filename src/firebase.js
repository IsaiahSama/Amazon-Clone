// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVuVkulZkhP6ZGtOetg9gNq3HDm2bSN8M",
  authDomain: "clone-dbc67.firebaseapp.com",
  projectId: "clone-dbc67",
  storageBucket: "clone-dbc67.appspot.com",
  messagingSenderId: "99094345308",
  appId: "1:99094345308:web:a346be22f0dcb35ab59899",
  measurementId: "G-PNT229ZYXX",
};

const app = initializeApp(firebaseConfig);

// the database
// const db = firebaseApp.firestore();
export const auth = getAuth(app);

export default app;
