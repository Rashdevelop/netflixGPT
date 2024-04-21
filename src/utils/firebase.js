// Import the functions you need from the SDKs you need
import { initializeApp ,getAuth} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYQbrh9CGn2AdJnSnvWjBYlH5_5bqNI7g",
  authDomain: "netflixgpt-c7420.firebaseapp.com",
  projectId: "netflixgpt-c7420",
  storageBucket: "netflixgpt-c7420.appspot.com",
  messagingSenderId: "287157530966",
  appId: "1:287157530966:web:1957fe462149dd4a23a6f7",
  measurementId: "G-66TKXE2VHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const getAuth=getAuth()