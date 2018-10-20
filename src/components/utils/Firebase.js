const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const config = {
  apiKey: "REDACTED",
  authDomain: "REDACTED.firebaseapp.com",
  databaseURL: "https://REDACTED.firebaseio.com",
  projectId: "REDACTED",
  storageBucket: "REDACTED.appspot.com",
  messagingSenderId: "REDACTED"
};

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
export const db = firebase.firestore();
export const auth = firebase.auth();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});
