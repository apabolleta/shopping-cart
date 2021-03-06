import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, getDoc } from 'firebase/firestore';

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

// Get products from DDBB
async function getProducts() {
  const snapShot = await getDocs(collection(db, "products"));
  const products = snapShot.docs.map(d => Object.assign({}, d.data(), {id: d.id}));
  return products;
}

// Add new order to DDBB
async function newOrder(data) {
  const docRef = await addDoc(collection(db, "orders"), data);
  const docSnap = await getDoc(docRef);
  const order = Object.assign({}, docSnap.data(), {id: docSnap.id});
  return order;
}

export { getProducts, newOrder };