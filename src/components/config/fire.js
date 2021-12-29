import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACt2chKZ8t1sBtzkxdraxh2pT6F5PGoPg",
  authDomain: "budget-manager-b5997.firebaseapp.com",
  projectId: "budget-manager-b5997",
  storageBucket: "budget-manager-b5997.appspot.com",
  messagingSenderId: "876588119464",
  appId: "1:876588119464:web:d579a3f19d1cfd750c999d",
  measurementId: "G-XENG0DRJ9R"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig); //object- project detail
var auth = app.auth();
var db = app.database();
var provider = new firebase.auth.GoogleAuthProvider(); 
export {auth , provider,db};
export default app;