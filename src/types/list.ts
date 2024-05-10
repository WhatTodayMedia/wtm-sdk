export interface ListPropsType {
  title: string;
  tag: "영화" | "드라마" | "예능";
  category: CategoryType[];
  described: string;
  grade: string;
  famousLine: string;
  date: {
    start: string;
    end: string;
  };
  ost: URL;
  trailer: URL;
  watchaPedia: URL;
  thumbnailUrl: URL;

  id: string;
}

export interface CategoryType {
  color: string;
  name: string;
}
