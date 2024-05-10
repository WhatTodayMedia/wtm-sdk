import { doc, collection, setDoc } from "firebase/firestore";
import { db } from "../utils/fbase";
import { WtmListType } from "../types/list";

export const createWtmData = async (createObj: WtmListType) => {
  const docRef = doc(collection(db, "media"));
  await setDoc(docRef, createObj);
};

// const createData = {
//     tag: "영화",
//     title: "제목이요",
//     thumbnail: "",
//     category: { name: "스릴러", color: "orange" },
//     described: "하이",
//     grade: 3.5,
//     watchaPedia: "https://pedia.watcha.com/ko-KR/contents/m5X2LM4",
//     trailer: "https://www.youtube.com/watch?v=VPZizQ_-fQc",
//     famousLine: "어떻게 보면, 지어낸 이야기는 없어요. 제가 겪은 그대로의 이야기인데 그냥 관점이 다른 거예요. 관점이라는 게 결국은 지어낸 이야기와 다를 것이 없어요.",
//     endDate: null,
//     startDate: "2024-01-12",
//     ost: "https://open.spotify.com/track/656QT77xVq3cCYLBXnzd90?si=8c54a29720794c8d",
//     commentId: "6Hl4LGDZQa4HvfEkbLN4",
//   };
