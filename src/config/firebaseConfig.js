import firebase from 'firebase'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbYRq4i6pX-G8o2Q-Wu7aF1km_NCSknmk",
  authDomain: "petcost-20bdb.firebaseapp.com",
  projectId: "petcost-20bdb",
  storageBucket: "petcost-20bdb.appspot.com",
  messagingSenderId: "652734236067",
  appId: "1:652734236067:web:718e6c4c6775d4c92f4616",
  measurementId: "G-HH55NSFG6X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// var auth = firebase.auth()

export default firebase