import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCIKXpslcqQGB4Rwcs_-rPrqcE6r7swzDA",
//   authDomain: "myfirstchat-7f3ac.firebaseapp.com",
//   databaseURL: "https://myfirstchat-7f3ac-default-rtdb.firebaseio.com",
//   projectId: "myfirstchat-7f3ac",
//   storageBucket: "myfirstchat-7f3ac.appspot.com",
//   messagingSenderId: "491726507118",
//   appId: "1:491726507118:web:8035c858f77e38443d6a7f",
// };

export const firebaseConfig = {
  apiKey: "AIzaSyCIKXpslcqQGB4Rwcs_-rPrqcE6r7swzDA",
  authDomain: "myfirstchat-7f3ac.firebaseapp.com",
  databaseURL: "https://myfirstchat-7f3ac-default-rtdb.firebaseio.com",
  projectId: "myfirstchat-7f3ac",
  storageBucket: "myfirstchat-7f3ac.appspot.com",
  messagingSenderId: "491726507118",
  appId: "1:491726507118:web:8035c858f77e38443d6a7f",
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
