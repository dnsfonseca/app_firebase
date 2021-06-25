import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDwsWNQnsJmqItKkNLGhyRtF1K9aapVXxk",
  authDomain: "app-firebase-ee204.firebaseapp.com",
  databaseURL: "https://app-firebase-ee204-default-rtdb.firebaseio.com",
  projectId: "app-firebase-ee204",
  storageBucket: "app-firebase-ee204.appspot.com",
  messagingSenderId: "166050399184",
  appId: "1:166050399184:web:d156d3bf5727b0a1006fd5",
  measurementId: "G-ZH652QY4BP",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
