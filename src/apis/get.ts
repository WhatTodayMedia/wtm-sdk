import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/fbase";

export const getWtmData = async () => {
  const arr: any = [];
  const q = query(collection(db, "media"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => arr.push(doc.data()));
  return arr;
};

export const getWtmFilterData = async (
  filterCategory: string,
  filterNames: string[]
) => {
  const arr: any = [];
  const q = query(
    collection(db, "media"),
    where(filterCategory, "array-contains-any", filterNames)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => arr.push(doc.data()));
  return arr;
};

export const getWtmSearchData = async (keyword: string, category?: string) => {
  const arr: any = [];
  const q = query(
    collection(db, "media"),
    where(category ?? "title", ">=", keyword),
    where(category ?? "title", "<=", keyword + "\uf8ff")
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => arr.push(doc.data()));
  return arr;
};

export const getWtmDetailData = async (
  subDocument: string,
  subCollection: string
) => {
  const arr: any = [];
  const q = query(collection(db, "media", subDocument, subCollection));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => arr.push(doc.data()));
  return arr;
};
