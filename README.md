# WTM API

![](https://img.shields.io/npm/d18m/wtm-api) ![](https://img.shields.io/npm/v/wtm-api) ![](https://img.shields.io/github/stars/whatTodayMedia/wtm-api)

## Installation

Using npm:

```zsh
$ npm install wtm-api
```

Using yarn:

```zsh
$ yarn add wtm-api
```

## Usage

## import

```ts
import {
  getWtmData,
  getWtmCategoryData,
  getWtmSearchData,
  createWtmData,
  WtmListType,
  CategoryItems,
  CategoryColors,
} from "musinsa";
```

## method

### getWtmData()

모든데이터 조회

### getWtmFilterData(filterCategory : string, filterNames : string[])

장르, 카테고리 조회

- filterCategory : 필터할 태그나 카테고리 종류
- filterNames : 필터할 태그나 카테고리이름들

### getWtmSearchData(keyword : string, category : string)

검색데이터 조회

- keyword : 검색할 값
- category(Optional) : 검색할 카테고리(기본값 제목)

### getWtmDetailData(subDocument : string, subCollection : string)

데이터 세부사항 조회

- subDocument : 문서이름
- subCollection : 세부 컬렉션 이름

### createWtmData(createObj: WtmListType)

데이터 생성

- createObj : 생성할 데이터

### ex) data.json

```js
{
  tag: "영화",
  title: "너와 나",
  thumbnailUrl: "imgUrl.jpg",
  category: ['로맨스'],
  described: '“오늘은 너한테 꼭 하고 싶은 말이 있는데”
              수학여행을 하루 앞둔 오후, 세미는 이상한 꿈에서 깨어나 하은에게로 향한다. 오랫동안 눌러왔던 마음을 오늘은 반드시 전해야 할 것 같은 기분이 들었기 때문이다.
              하지만 넘쳐 흐르는 마음과 달리 자꾸만 어긋나는 두 사람. 서툰 오해와 상처를 뒤로하고, 세미는 하은에게 진심을 고백할 수 있을까?',
  grade: "5",
  famousLine: "사랑해, 사랑해, 사랑해",
  recommended: true,
  startDate: "Wed Jan 25 2017 16:00:00 GMT-0800",
  endDate: null,
  ost: "https://open.spotify.com/track/6HgeeiHqVpxxFCB0bjBRT6?si=3aeb768d866c467c",
  trailer: "https://www.youtube.com/watch?v=CT68pb1ptuY&t=4s",
  watchaPedia: "https://pedia.watcha.com/ko-KR/contents/mdREZrD",
}
```

## utils

### list type

```ts
import { WtmListType } from "wtm-api";

export interface WtmListType {
  title: string;
  described: string;
  thumbnailUrl: string;
  tag: "영화" | "드라마" | "예능" | "전체";
  category: string[];
  grade: string;
  recommended: boolean;
  famousLine: string;
  startDate: Date | string;
  endDate?: Date;
  ost: string;
  trailer: string;
  watchaPedia: string;
}
```

### Colors, CategoryColors data

```ts
import { Colors, CategoryColors } from "wtm-api";

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

export Count CategoryItems =
  휴먼
  로맨스: 우원해, 빨렷들
  액션: red,
  판타지: blue,
  범죄: gray,
  스릴러: brown,
  미스터리: shallowGray,
  코미디: pink,
  느와르: shallowGray,
  서바이벌: red,
  호러: yellow,
  SF: green,

```
