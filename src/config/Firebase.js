import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCbL8KYn4I7Bo01I5DQgtBjHXEIppc-OzA",
  authDomain: "shopping-cart-ced69.firebaseapp.com",
  databaseURL: "https://shopping-cart-ced69-default-rtdb.firebaseio.com",
  projectId: "shopping-cart-ced69",
  storageBucket: "shopping-cart-ced69.appspot.com",
  messagingSenderId: "118041927340",
  appId: "1:118041927340:web:bef9e39935750652150909"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;