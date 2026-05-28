// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAVPNYJRR7gfqUmO5umA79bMVMX2-M1VA",
  authDomain: "qss-b766e.firebaseapp.com",
  projectId: "qss-b766e",
  storageBucket: "qss-b766e.firebasestorage.app",
  messagingSenderId: "194072128884",
  appId: "1:194072128884:web:0f2c88452b9b64f82f5021",
  measurementId: "G-1KVQYRZYQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database
const db = getFirestore(app);

export { db };