import { TagType } from "..";
export declare const getWtmData: () => Promise<any>;
export declare const getWtmFilterData: (tagName: TagType, filterNames: string[]) => Promise<any>;
export declare const getWtmSearchData: (keyword: string, category?: string) => Promise<any>;
export declare const getWtmDetailData: (subDocument: string, subCollection: string) => Promise<any>;
