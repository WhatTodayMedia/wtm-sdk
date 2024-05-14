import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "../utils/fbase";

export const getWtmData = async () => {
  const arr: any = [];
  const q = query(collection(db, "media"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => arr.push(doc.data()));
  return arr;
};

export const getWtmFilterData = async (
  filterName: string,
  sort?: "asc" | "desc"
) => {
  const arr: any = [];
  const q = query(collection(db, "media"), orderBy(filterName, sort));
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
