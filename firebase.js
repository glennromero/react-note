import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyC2nlmVdYG__igDYns7NUBje2L-vmOYSMQ",
  authDomain: "react-notes-app-1b579.firebaseapp.com",
  projectId: "react-notes-app-1b579",
  storageBucket: "react-notes-app-1b579.appspot.com",
  messagingSenderId: "556146527930",
  appId: "1:556146527930:web:35161cbeeef72b11d3bc83"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")