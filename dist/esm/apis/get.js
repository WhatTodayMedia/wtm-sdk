import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/fbase";
export const getWtmData = async () => {
    const arr = [];
    const q = query(collection(db, "media"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => arr.push(doc.data()));
    return arr;
};
export const getWtmFilterData = async (filterCategory, filterName) => {
    const arr = [];
    const q = query(collection(db, "media"), where(filterCategory, "array-contains", filterName));
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
