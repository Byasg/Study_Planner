import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyCyj7g_Duw6jK12lbi1VLzcCxThmKEz0Zw",
  authDomain: "study-planner-22.firebaseapp.com",
  projectId: "study-planner-22",
  storageBucket: "study-planner-22.appspot.com",
  messagingSenderId: "676182252729",
  appId: "1:676182252729:web:fcc438a98d09a66d63cf68",
  measurementId: "G-N86ZWMKYNJ"
};

firebase.initializeApp(firebaseConfig)


export const firebaseAuth = firebase.auth