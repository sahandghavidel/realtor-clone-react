// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBQpSGK44-NP75mqKcxys1qsMADGTeacQ8',
  authDomain: 'clonerealtorreact.firebaseapp.com',
  projectId: 'clonerealtorreact',
  storageBucket: 'clonerealtorreact.appspot.com',
  messagingSenderId: '21688662890',
  appId: '1:21688662890:web:1672af0e60b3f3df9b4313',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
