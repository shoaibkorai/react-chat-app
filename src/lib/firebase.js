// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: "reactchat-8953e.firebaseapp.com",
//   projectId: "reactchat-8953e",
//   storageBucket: "reactchat-8953e.appspot.com",
//   messagingSenderId: "989490756392",
//   appId: "1:989490756392:web:9e54e92c7b39c531b82e1d"
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth()
// export const db = getFirestore()
// export const storage = getStorage()


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: "react-chat-app-4d2a5.firebaseapp.com",
//   projectId: "react-chat-app-4d2a5",
//   storageBucket: "react-chat-app-4d2a5.appspot.com",
//   messagingSenderId: "904992802525",
//   appId: "1:904992802525:web:ac20d87ea88b9f5fb2fd34",
//   measurementId: "G-1VVC6TM5T3"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCiRgpz8oJo98m5InTcVAqRBse9XnUFZe8",
  authDomain: "react-app-65c2a.firebaseapp.com",
  projectId: "react-app-65c2a",
  storageBucket: "react-app-65c2a.appspot.com",
  messagingSenderId: "1096742260887",
  appId: "1:1096742260887:web:0b4911c2e8dab2cda9d9d2"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()