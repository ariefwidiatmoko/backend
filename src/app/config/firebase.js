import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBRc6iVS_p_aliD1qJw-aJYJCcl0dJtsiI",
    authDomain: "dashboard-b52e8.firebaseapp.com",
    databaseURL: "https://dashboard-b52e8.firebaseio.com",
    projectId: "dashboard-b52e8",
    storageBucket: "",
    messagingSenderId: "1007474694663",
    appId: "1:1007474694663:web:5023ed8cd270f6d7"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;