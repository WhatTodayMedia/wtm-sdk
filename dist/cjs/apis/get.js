"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWtmDetailData = exports.getWtmSearchData = exports.getWtmFilterData = exports.getWtmData = void 0;
const firestore_1 = require("firebase/firestore");
const fbase_1 = require("../utils/fbase");
const getWtmData = async () => {
    const arr = [];
    const q = (0, firestore_1.query)((0, firestore_1.collection)(fbase_1.db, "media"));
    const querySnapshot = await (0, firestore_1.getDocs)(q);
    querySnapshot.forEach((doc) => arr.push(doc.data()));
    return arr;
};
exports.getWtmData = getWtmData;
const getWtmFilterData = async (filterCategory, filterName) => {
    const arr = [];
    const q = (0, firestore_1.query)((0, firestore_1.collection)(fbase_1.db, "media"), (0, firestore_1.where)(filterCategory, "==", filterName));
    const querySnapshot = await (0, firestore_1.getDocs)(q);
    querySnapshot.forEach((doc) => arr.push(doc.data()));
    return arr;
};
exports.getWtmFilterData = getWtmFilterData;
const getWtmSearchData = async (keyword, category) => {
    const arr = [];
    const q = (0, firestore_1.query)((0, firestore_1.collection)(fbase_1.db, "media"), (0, firestore_1.where)(category ?? "title", ">=", keyword), (0, firestore_1.where)(category ?? "title", "<=", keyword + "\uf8ff"));
    const querySnapshot = await (0, firestore_1.getDocs)(q);
    querySnapshot.forEach((doc) => arr.push(doc.data()));
    return arr;
};
exports.getWtmSearchData = getWtmSearchData;
const getWtmDetailData = async (subDocument, subCollection) => {
    const arr = [];
    const q = (0, firestore_1.query)((0, firestore_1.collection)(fbase_1.db, "media", subDocument, subCollection));
    const querySnapshot = await (0, firestore_1.getDocs)(q);
    querySnapshot.forEach((doc) => arr.push(doc.data()));
    return arr;
};
exports.getWtmDetailData = getWtmDetailData;
