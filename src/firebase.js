// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDmXJhxgS0t7I33SjUZYJb6IkuE6A_1SQg",
  authDomain: "test-react-6de81.firebaseapp.com",
  projectId: "test-react-6de81",
  storageBucket: "test-react-6de81.appspot.com",
  messagingSenderId: "496963636051",
  appId: "1:496963636051:web:6f72b8799c89b5c0cf6fa6",
  measurementId: "G-V2EXYTZ216"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth();
const firestore = firebase.firestore();


export { auth, firestore };

