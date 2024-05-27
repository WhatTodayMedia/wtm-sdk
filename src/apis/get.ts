import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/fbase";
import { CategoryItems, CategoryType, TagType, WtmListType } from "..";

export const getWtmData = async () => {
  const arr: WtmListType[] = [];
  const q = query(collection(db, "media"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc: any) => arr.push(doc.data()));
  return arr;
};

export const getWtmFilterData = async (
  tagName: TagType,
  filterNames: CategoryType[]
) => {
  const arr: WtmListType[] = [];

  const q = query(
    collection(db, "media"),
    // where(
    //   "tag",
    //   "in",
    //   tagName[0] === "전체" ? ["영화", "드라마", "예능"] : [tagName]
    // ),
    where("category", "not-in", filterNames)
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc: any) => arr.push(doc.data()));
  return arr;
};

export const getWtmSearchData = async (keyword: string, category?: string) => {
  const arr: WtmListType[] = [];
  const q = query(
    collection(db, "media"),
    where(category ?? "title", ">=", keyword),
    where(category ?? "title", "<=", keyword + "\uf8ff")
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc: any) => arr.push(doc.data()));
  return arr;
};

export const getWtmDetailData = async (
  subDocument: string,
  subCollection: string
) => {
  const arr: WtmListType[] = [];
  const q = query(collection(db, "media", subDocument, subCollection));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc: any) => arr.push(doc.data()));
  return arr;
};
