const firebaseConfig = {
  apiKey: "AIzaSyCfJSoqhWCQWJqDREDjksT6K6gNNzH2tKc",
  authDomain: "saasbuddy-c03d7.firebaseapp.com",
  projectId: "saasbuddy-c03d7",
  storageBucket: "saasbuddy-c03d7.firebasestorage.app",
  messagingSenderId: "275148454098",
  appId: "1:275148454098:web:5fad6a3afb95c82c92550b",
  measurementId: "G-HRSP7SETCQ",
};

firebase.initializeApp(firebaseConfig);
window.firebaseAuth = firebase.auth();
window.firebaseDb = firebase.firestore();
