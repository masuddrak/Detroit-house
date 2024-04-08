// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAukfL5j6uZq6J9gvqCoiknvanJxjVLePs",
  authDomain: "detroit-house.firebaseapp.com",
  projectId: "detroit-house",
  storageBucket: "detroit-house.appspot.com",
  messagingSenderId: "392314303737",
  appId: "1:392314303737:web:056431977929e0688e5e28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
