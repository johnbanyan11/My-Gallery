// import * as firebase from "firebase/app";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD2x4Ok1SVSatd3u_scOK2iLvuuERYM-eA",
  authDomain: "react-gallery-a181f.firebaseapp.com",
  projectId: "react-gallery-a181f",
  storageBucket: "react-gallery-a181f.appspot.com",
  messagingSenderId: "353753496718",
  appId: "1:353753496718:web:0d54e7c900d9298de99ddf",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
