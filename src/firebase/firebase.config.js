// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzPh-UDW5AIytfHrnqt-re-8UB94K2Iv0",
  authDomain: "assignment-9-event-management.firebaseapp.com",
  projectId: "assignment-9-event-management",
  storageBucket: "assignment-9-event-management.appspot.com",
  messagingSenderId: "312426471370",
  appId: "1:312426471370:web:f6a92cebdf7bdece53f933"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;