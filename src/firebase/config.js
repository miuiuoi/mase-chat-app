import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOKEQUjO-IqeDVeCTq5gdaHxZPFMrMhSE",
  authDomain: "real-time-chat-450ab.firebaseapp.com",
  projectId: "real-time-chat-450ab",
  storageBucket: "real-time-chat-450ab.appspot.com",
  messagingSenderId: "722724288554",
  appId: "1:722724288554:web:b94975ab3d297d3b2e6b53",
  measurementId: "G-5FB4MD0K7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app); 
const db = getFirestore(app);

export { db, auth }; 
// export default app; 