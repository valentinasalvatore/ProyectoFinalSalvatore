 import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBFnyfF9kbbZPorByerkZBb3b2eg44pi7M",
  authDomain: "curso-react-js-af312.firebaseapp.com",
  projectId: "curso-react-js-af312",
  storageBucket: "curso-react-js-af312.firebasestorage.app",
  messagingSenderId: "9253479850",
  appId: "1:9253479850:web:c15f1e1843a166e0e977d3",
  measurementId: "G-MTGLWEGX1T"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
