export const Colors: Record<string, string> = {
  red: "#FF7D7D",
  purple: "#55155d",
  pink: "#982E81",
  gray: "#818198",
  orange: "#EE786D",
  blue: "#5966E9",
  yellow: "#eff4af",
  green: "#7eb293",

  shallowGray: "#d4d4dc",
  brown: "#a95e13",
};

export const CategoryColors = {
  휴먼: Colors.orange,
  로맨스: Colors.purple,
  액션: Colors.red,
  판타지: Colors.blue,
  범죄: Colors.gray,
  스릴러: Colors.brown,
  미스터리: Colors.shallowGray,
  코미디: Colors.pink,
  느와르: Colors.shallowGray,
  서바이벌: Colors.red,
  호러: Colors.yellow,
  SF: Colors.green,
};

export const CategoryItems = Object.keys(CategoryColors);

// 휴먼 : 주
// 로멘스 : 보
// 액션 ; 빨
// 판타지 : 파
// 범죄 : 회
// 스릴러 : 갈
// 미스터리 : 회
// 코미디 : 분
// 느와르 : 옅은 회
// 서바이벌 : 빨
// 호러 : 노
// SF : 초
