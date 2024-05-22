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

export type CategoryType =
  | "휴먼"
  | "로맨스"
  | "액션"
  | "판타지"
  | "범죄"
  | "스릴러"
  | "미스터리"
  | "코미디"
  | "느와르"
  | "서바이벌"
  | "호러"
  | "SF";

export type TagType = "영화" | "드라마" | "예능";
