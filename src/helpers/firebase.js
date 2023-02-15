import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInAnonymously, signOut } from "firebase/auth";

const firebaseConfig = {
    databaseURL: "https://vote-7a348-default-rtdb.firebaseio.com",
    apiKey: "AIzaSyBgxW8-x-qXwqhK3yonvBEsalFHsjnnUPY",
  authDomain: "vote-7a348.firebaseapp.com",
  projectId: "vote-7a348",
  storageBucket: "vote-7a348.appspot.com",
  messagingSenderId: "1027031216574",
  appId: "1:1027031216574:web:099f426794b07699cd09ef"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);



const googleProvider = new GoogleAuthProvider()
export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    if (err.code === "auth/popup-closed-by-user")
      alert('Login has not been completed, Please click on login again');
    if (err.code === "auth/popup-blocked")
      alert('Please unblock Login popup to complete Login');
    else
      console.log(err);
  }
};


export const signInAnon = async () => {
  try {
    await signInAnonymously(auth)
  } catch (err) {
    alert(err.message);
  }
};

export const logout = () => {
  signOut(auth);
};

export default firebase;
