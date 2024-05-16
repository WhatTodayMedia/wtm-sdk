import { doc, collection, setDoc } from "firebase/firestore";
import { db } from "../utils/fbase";
export const createWtmData = async (createObj) => {
    const docRef = doc(collection(db, "media"));
    await setDoc(docRef, createObj);
};
