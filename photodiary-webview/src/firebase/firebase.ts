// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCL8WLhlF5MnMLTzSL_URnDJL4bwJsWa0I',
  authDomain: 'localhost:3000',
  projectId: 'photodiary-44b18',
  storageBucket: 'photodiary-44b18.appspot.com',
  messagingSenderId: '849670100795',
  appId: '1:849670100795:web:b631663f3b794383ed891e',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
