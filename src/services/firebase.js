// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc } from "firebase/firestore"
import itemsData from "../data/data"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAUyez9e0OzQzEWPpvKfs033rLW59lWNU",
  authDomain: "mili-4fe6d.firebaseapp.com",
  projectId: "mili-4fe6d",
  storageBucket: "mili-4fe6d.appspot.com",
  messagingSenderId: "371600723419",
  appId: "1:371600723419:web:5453e6311bff96eeddabfe"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app)

export async function saveProductsToFirebase() {
  const collectionProducts = collection(firestoreDB, "products")

  for(let item of itemsData){
    const docref = await addDoc(collectionProducts, item)
  }
}


export default firestoreDB