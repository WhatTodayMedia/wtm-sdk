export interface WtmListType {
    title: string;
    described: string;
    thumbnailUrl: string;
    tag: TagType;
    category: CategoryType[];
    grade: string;
    recommended: boolean;
    famousLine: string;
    startDate: Date;
    endDate?: Date | undefined;
    ost: string;
    trailer: string;
    watchaPedia: string;
}
export type CategoryType = "코미디" | "로맨스" | "스릴러" | "범죄" | "미스터리" | "느와르" | "서바이벌" | "SF" | "호러" | "액션";
export type TagType = "영화" | "드라마" | "예능" | "전체";
