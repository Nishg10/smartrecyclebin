import  { initializeApp}  from 'firebase/app';
import  { getAuth}  from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'

console.log("Firebase calling");
// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDRuOYI7jbJn_8qyWSWDg2n3EvhLljkxeE",
  authDomain: "smartrecyclebin-519d2.firebaseapp.com",
  databaseURL: "https://smartrecyclebin-519d2-default-rtdb.firebaseio.com",
  projectId: "smartrecyclebin-519d2",
  storageBucket: "smartrecyclebin-519d2.appspot.com",
  messagingSenderId: "756538099135",
  appId: "1:756538099135:web:d0096cd19118a0c9c34d0a"
};

// Initialize Firebase

console.log("Firebase called" + app);
const app=initializeApp(firebaseConfig);
const authentication=getAuth(app);
export const db=getFirestore(app);
export default authentication;