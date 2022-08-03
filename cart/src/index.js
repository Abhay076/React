import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as firebase from 'firebase'
// import 'firebase/firestore';
// import { initializeApp } from "firebase/app";

import * as firebase from "firebase";
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
 
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
