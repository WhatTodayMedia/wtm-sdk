export const Colors = {
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
    서바이벌: Colors.red,
    액션: Colors.red,
    휴먼: Colors.orange,
    호러: Colors.yellow,
    SF: Colors.green,
    판타지: Colors.blue,
    범죄: Colors.gray,
    느와르: Colors.shallowGray,
    미스터리: Colors.shallowGray,
    스릴러: Colors.brown,
    코미디: Colors.pink,
    로맨스: Colors.purple,
};
export const CategoryItems = Object.keys(CategoryColors);
export const TagItems = ["전체", "영화", "드라마", "예능"];
