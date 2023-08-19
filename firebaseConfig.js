// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {  getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut   } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore , doc, setDoc, getDoc,collection, addDoc, getDocs, deleteDoc, updateDoc, serverTimestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getStorage ,ref, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjaFKMCqe_2B0JxF1ehEQgq93RBiwA824",
  authDomain: "mini-hackathon-wahaj-khan.firebaseapp.com",
  projectId: "mini-hackathon-wahaj-khan",
  storageBucket: "mini-hackathon-wahaj-khan.appspot.com",
  messagingSenderId: "666403804873",
  appId: "1:666403804873:web:ef5c1c6d2f80832acfdf18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const storage = getStorage(app);
  export { 
    app ,
    auth, 
    createUserWithEmailAndPassword, 
    db ,
    doc ,
    setDoc, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    getDoc, 
    collection, 
    addDoc, 
    getDocs, 
    deleteDoc, 
    updateDoc, 
    serverTimestamp, 
    query, 
    orderBy, 
    storage, 
    ref, 
    uploadBytesResumable, 
    getDownloadURL
  } 