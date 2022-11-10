//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyDgBOu02Wbw1E04_nf9KuJrqMIWr0se6WI",
  authDomain: "comp1800-202230-bby24.firebaseapp.com",
  projectId: "comp1800-202230-bby24",
  storageBucket: "comp1800-202230-bby24.appspot.com",
  messagingSenderId: "297337641134",
  appId: "1:297337641134:web:017036b19ce2ba9f8a353f",
  measurementId: "G-MEXJYK6S5Q"
};
//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();