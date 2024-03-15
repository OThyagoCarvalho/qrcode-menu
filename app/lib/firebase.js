import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: PROCESS.ENV.API_KEY,
  authDomain: "qr-codemenu-de349.firebaseapp.com",
  projectId: "qr-codemenu-de349",
  storageBucket: "qr-codemenu-de349.appspot.com",
  messagingSenderId: "874536752780",
  appId: "1:874536752780:web:9ca0b1b8486d324c204da9"
};

console.log(JSON.stringify(firebaseConfig))

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const auth = getAuth(app);
