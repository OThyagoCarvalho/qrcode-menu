import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBu4qOz_Nq7oEnIAMdnHUHYwFgQdtjioEg',
  authDomain: 'qr-code-menu-b21f9.firebaseapp.com',
  projectId: 'qr-code-menu-b21f9',
  storageBucket: 'qr-code-menu-b21f9.appspot.com',
  messagingSenderId: '315469803918',
  appId: '1:315469803918:web:b9b513de760f312e9134df',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
