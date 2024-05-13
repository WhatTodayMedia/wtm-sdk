export interface WtmListType {
    title: string;
    described: string;
    thumbnailUrl: string;
    tag: "영화" | "드라마" | "예능";
    category: CategoryType[];
    grade: number;
    recommended: boolean;
    famousLine: string;
    date: {
        start: string;
        end: string;
    };
    ost: string;
    trailer: string;
    watchaPedia: string;
}
export interface CategoryType {
    color: string;
    name: string;
}
