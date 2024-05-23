import { TagType, WtmListType } from "..";
export declare const getWtmData: () => Promise<WtmListType[]>;
export declare const getWtmFilterData: (tagName: TagType, filterNames: string[]) => Promise<WtmListType[]>;
export declare const getWtmSearchData: (keyword: string, category?: string) => Promise<WtmListType[]>;
export declare const getWtmDetailData: (subDocument: string, subCollection: string) => Promise<WtmListType[]>;
