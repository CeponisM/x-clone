import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCfnIgfXmbKsa2GIeL6fw4DxJ7KSVgICD4",
    authDomain: "twitter-clone-80339.firebaseapp.com",
    projectId: "twitter-clone-80339",
    storageBucket: "twitter-clone-80339.appspot.com",
    messagingSenderId: "1009769311397",
    appId: "1:1009769311397:web:4805ef9522a3d39537f14c"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);