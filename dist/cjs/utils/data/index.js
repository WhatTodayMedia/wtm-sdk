"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagItems = exports.CategoryItems = exports.CategoryColors = exports.Colors = void 0;
exports.Colors = {
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
exports.CategoryColors = {
    서바이벌: exports.Colors.red,
    액션: exports.Colors.red,
    휴먼: exports.Colors.orange,
    호러: exports.Colors.yellow,
    SF: exports.Colors.green,
    판타지: exports.Colors.blue,
    범죄: exports.Colors.gray,
    느와르: exports.Colors.shallowGray,
    미스터리: exports.Colors.shallowGray,
    스릴러: exports.Colors.brown,
    코미디: exports.Colors.pink,
    로맨스: exports.Colors.purple,
};
exports.CategoryItems = Object.keys(exports.CategoryColors);
exports.TagItems = ["전체", "영화", "드라마", "예능"];
