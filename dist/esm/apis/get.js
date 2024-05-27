import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/fbase";
import { CategoryItems } from "..";
export const getWtmData = async () => {
    const arr = [];
    const q = query(collection(db, "media"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => arr.push(doc.data()));
    return arr;
};
export const getWtmFilterData = async (tagName, filterNames) => {
    const arr = [];
    const CategoryArr = filterNames;
    const filterArr1 = CategoryArr.slice(0, CategoryItems.length / 2);
    const filterArr2 = CategoryArr.slice(CategoryItems.length / 2);
    const q = query(collection(db, "media"), 
    // where(
    //   "tag",
    //   "in",
    //   tagName[0] === "전체" ? ["영화", "드라마", "예능"] : [tagName]
    // ),
    where("category", "not-in", filterArr1), where("category", "not-in", filterArr2));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => arr.push(doc.data()));
    return arr;
};
export const getWtmSearchData = async (keyword, category) => {
    const arr = [];
    const q = query(collection(db, "media"), where(category ?? "title", ">=", keyword), where(category ?? "title", "<=", keyword + "\uf8ff"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => arr.push(doc.data()));
    return arr;
};
export const getWtmDetailData = async (subDocument, subCollection) => {
    const arr = [];
    const q = query(collection(db, "media", subDocument, subCollection));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => arr.push(doc.data()));
    return arr;
};
