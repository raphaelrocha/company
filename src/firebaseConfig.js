const rebase = require('re-base');
const firebase = require('firebase');

// Initialize Firebase
const config = {
  apiKey: "AIzaSyA4qdlTY2Ctmh2ERVBlyRKhMxfZol2wqqc",
  authDomain: "company-87a0a.firebaseapp.com",
  databaseURL: "https://company-87a0a.firebaseio.com",
  projectId: "company-87a0a",
  storageBucket: "company-87a0a.appspot.com",
  messagingSenderId: "831159791709"
};

const app = firebase.initializeApp(config);
const firebaseConfig = rebase.createClass(app.database());

export const firebaseStorage = app.storage();

export const firebaseAuth = app.auth();

export default firebaseConfig;