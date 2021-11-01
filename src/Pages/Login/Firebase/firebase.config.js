const firebaseConfig = {
  // apiKey: "AIzaSyBU6PLmckiRKUjLDUXCq4RLkEcsa84uC10",
  // authDomain: "food-zonous.firebaseapp.com",
  // projectId: "food-zonous",
  // storageBucket: "food-zonous.appspot.com",
  // messagingSenderId: "702395480956",
  // appId: "1:702395480956:web:7490210181993fb8a642f9",

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebaseConfig;
