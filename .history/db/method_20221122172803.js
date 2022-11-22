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
