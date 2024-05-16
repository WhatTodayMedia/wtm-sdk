"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWtmData = void 0;
const firestore_1 = require("firebase/firestore");
const fbase_1 = require("../utils/fbase");
const createWtmData = async (createObj) => {
    const docRef = (0, firestore_1.doc)((0, firestore_1.collection)(fbase_1.db, "media"));
    await (0, firestore_1.setDoc)(docRef, createObj);
};
exports.createWtmData = createWtmData;
