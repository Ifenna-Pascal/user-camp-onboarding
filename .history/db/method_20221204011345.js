import firebaseConfig from "./firebase_config";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, where } from "firebase/firestore";

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
    location,
    branch,
    comment,
  });
  return result;
};

const findMember = async (email) => {
  const q = query(colRef, where("state", "==", "CA"));
};

export { addDocument };
