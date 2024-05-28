import { CategoryType, TagType, WtmListType } from "./types";
import { CategoryColors, CategoryItems, TagItems } from "./utils/data";
declare const wtm: {
    getData: () => Promise<WtmListType[]>;
    getFilterData: (tagName: TagType, filterNames: CategoryType[]) => Promise<WtmListType[]>;
    getSearchData: (keyword: string, category?: string | undefined) => Promise<WtmListType[]>;
    createData: (createObj: WtmListType) => Promise<void>;
};
export { wtm, WtmListType, CategoryType, TagType, TagItems, CategoryItems, CategoryColors, };
