// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import firebaseConfig from "./firbaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// initilaize app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, "contacts");

const addDocument = async (arg) => {
  const { fullName, email, phoneNumber, message } = arg;
  const result = await addDoc(colRef, {
    fullName,
    email,
    phoneNumber,
    message,
  });
  return result;
};

export { addDocument };
