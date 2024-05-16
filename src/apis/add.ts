import { doc, collection, setDoc } from "firebase/firestore";
import { db } from "../utils/fbase";
import { WtmListType } from "../types/list";

export const createWtmData = async (createObj: WtmListType) => {
  const docRef = doc(collection(db, "media"));
  await setDoc(docRef, createObj);
};
