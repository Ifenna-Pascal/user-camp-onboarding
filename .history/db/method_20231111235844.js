import firebaseConfig from "./firebase_config";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  onSnapshot,
} from "firebase/firestore";

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

const getCollectionData = (setTransactions) => {
  const q = query(collection(db, "members"));
  onSnapshot(q, (querySnapshot) => {
    setTransactions(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  });
};

export { addDocument, getCollectionData };
