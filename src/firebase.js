// import firebase from 'firebase'
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
//import  {initializeApp}  from "firebase/compat/app";
// other services is needed

const firebaseConfig = {
  apiKey: "AIzaSyAuEkXESuzbVuELn947a8KIa4GFEWJPpUI",
  authDomain: "linkedin-clone-cc445.firebaseapp.com",
  projectId: "linkedin-clone-cc445",
  storageBucket: "linkedin-clone-cc445.appspot.com",
  messagingSenderId: "1044338881764",
  appId: "1:1044338881764:web:8a3f9cfefd441dfbad28f1"
};

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db, auth};