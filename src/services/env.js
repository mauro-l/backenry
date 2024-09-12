/* const apiKey = import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY;
const authDomain = import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env
  .VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID; */

const baseUrl = import.meta.env.VITE_BACKEND_URL;
const productsUrl = baseUrl + "/api/products";
const cartsUrl = baseUrl + "/api/cart";

export { baseUrl, productsUrl, cartsUrl };
