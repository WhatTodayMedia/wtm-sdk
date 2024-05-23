import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/fbase";
import { TagType } from "..";

export const getWtmData = async () => {
  const q = query(collection(db, "media"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.forEach((doc) => doc.data());
};

export const getWtmFilterData = async (
  tagName: TagType,
  filterNames: string[]
) => {
  const q = query(
    collection(db, "media"),
    where(
      "tag",
      "in",
      tagName[0] === "전체" ? ["영화", "드라마", "예능"] : [tagName]
    ),
    where("category", "array-contains-any", filterNames)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.forEach((doc) => doc.data());
};

export const getWtmSearchData = async (keyword: string, category?: string) => {
  const q = query(
    collection(db, "media"),
    where(category ?? "title", ">=", keyword),
    where(category ?? "title", "<=", keyword + "\uf8ff")
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.forEach((doc) => doc.data());
};

export const getWtmDetailData = async (
  subDocument: string,
  subCollection: string
) => {
  const q = query(collection(db, "media", subDocument, subCollection));
  const querySnapshot = await getDocs(q);
  return querySnapshot.forEach((doc) => doc.data());
};
