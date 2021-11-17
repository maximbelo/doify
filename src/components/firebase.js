// Import the function to config and init the firebase app
import { initializeApp } from "firebase/app";
// Import the function to pull in the firebase realtime db service:
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnSHi5eOIZ0oTpc9TCiSGQXVSMGFkGJvc",
  authDomain: "doify-99610.firebaseapp.com",
  databaseURL: "https://doify-99610-default-rtdb.firebaseio.com",
  projectId: "doify-99610",
  storageBucket: "doify-99610.appspot.com",
  messagingSenderId: "848664496719",
  appId: "1:848664496719:web:9ca2f1781924085497783a",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const realtime = getDatabase(firebase);

export default realtime;
