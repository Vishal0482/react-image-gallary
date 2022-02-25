
import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-image-grid.firebaseapp.com",
  projectId: "react-image-grid",
  storageBucket: "react-image-grid.appspot.com",
  messagingSenderId: "211797530329",
  appId: "1:211797530329:web:45b29a2c2b2bba0bec90c8"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timeStamp}; 