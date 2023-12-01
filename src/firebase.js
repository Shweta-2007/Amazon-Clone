import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqgUHfaL71iT2Rlk17zvmdozZGSwVC2zc",
  authDomain: "clone-8a72a.firebaseapp.com",
  projectId: "clone-8a72a",
  storageBucket: "clone-8a72a.appspot.com",
  messagingSenderId: "655184848869",
  appId: "1:655184848869:web:eee7f994e3ae974d55b10c",
  measurementId: "G-5M2X1SL075",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
