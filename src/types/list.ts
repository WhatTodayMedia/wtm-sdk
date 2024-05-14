export interface WtmListType {
  title: string;
  described: string;
  thumbnailUrl: string;
  tag: "영화" | "드라마" | "예능";
  category: string[];
  grade: number;
  recommended: boolean;
  famousLine: string;
  startDate: Date;
  endDate?: Date;
  ost: string;
  trailer: string;
  watchaPedia: string;
}
