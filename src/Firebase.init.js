// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiwqs0XlhWNgU62XneLmcQ1O8dmATdykQ",
  authDomain: "jackson-dental-care.firebaseapp.com",
  projectId: "jackson-dental-care",
  storageBucket: "jackson-dental-care.appspot.com",
  messagingSenderId: "1038670099242",
  appId: "1:1038670099242:web:089d3f109edc5abd0a6453"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth (app)

export default auth