import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyCp9ELNj3kNVdpIoNOdM4Wwd8tetpykYwg",
  authDomain: "netflixclone-87fc9.firebaseapp.com",
  projectId: "netflixclone-87fc9",
  storageBucket: "netflixclone-87fc9.appspot.com",
  messagingSenderId: "789416966624",
  appId: "1:789416966624:web:ed7e4a513f396f2c6cd385",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
export default db;
export { auth };
