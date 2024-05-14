"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryItems = exports.CategoryColors = exports.Colors = void 0;
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
    휴먼: exports.Colors.orange,
    로맨스: exports.Colors.purple,
    액션: exports.Colors.red,
    판타지: exports.Colors.blue,
    범죄: exports.Colors.gray,
    스릴러: exports.Colors.brown,
    미스터리: exports.Colors.shallowGray,
    코미디: exports.Colors.pink,
    느와르: exports.Colors.shallowGray,
    서바이벌: exports.Colors.red,
    호러: exports.Colors.yellow,
    SF: exports.Colors.green,
};
exports.CategoryItems = Object.keys(exports.CategoryColors);
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
