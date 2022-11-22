import firebaseConfig from "./firbaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// initilaize app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, "members");

const addDocument = async (arg) => {
  const { firstName, lastName, email, location, branch, comment } = arg;
  const result = await addDoc(colRef, {
    firstName,
    lastName,

    email,
    phoneNumber,
    message,
  });
  return result;
};

export { addDocument };
