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
// const createData = {
//   tag: '영화',
//   title: '제목이요',
//   thumbnailUrl:
//     'https://res.cloudinary.com/dq3yngxm9/image/upload/v1715654248/uezbqq9lsjcxg5zzq4wc.jpg',
//   category: ['스릴러'],
//   described: '하이',
//   grade: '3.5',
//   watchaPedia: 'https://pedia.watcha.com/ko-KR/contents/m5X2LM4',
//   trailer: 'https://www.youtube.com/watch?v=VPZizQ_-fQc',
//   famousLine:
//     '어떻게 보면, 지어낸 이야기는 없어요. 제가 겪은 그대로의 이야기인데 그냥 관점이 다른 거예요. 관점이라는 게 결국은 지어낸 이야기와 다를 것이 없어요.',
//   // endDate: ,
//   recommended: true,
//   startDate: 'Wed Jan 25 2017 16:00:00 GMT-0800',
//   ost: 'https://open.spotify.com/track/656QT77xVq3cCYLBXnzd90?si=8c54a29720794c8d',
// }
