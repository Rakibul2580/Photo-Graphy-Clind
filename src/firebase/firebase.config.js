// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBjpcM1zs2-SJ-8XnOERT9IwomJgBclrBM",
  authDomain: "photo-graphy-4e366.firebaseapp.com",
  projectId: "photo-graphy-4e366",
  storageBucket: "photo-graphy-4e366.appspot.com",
  messagingSenderId: "1061054186719",
  appId: "1:1061054186719:web:91145be6029b8310eb556a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
