import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBT5wXJkkfDjGRjqRn40uZe_9ddmLfdSh0",
  authDomain: "linkedin-c11d3.firebaseapp.com",
  projectId: "linkedin-c11d3",
  storageBucket: "linkedin-c11d3.appspot.com",
  messagingSenderId: "49706650905",
  appId: "1:49706650905:web:56f47f36f0c30d3197c988"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };