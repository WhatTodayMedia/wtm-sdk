import { getWtmData, getWtmFilterData, getWtmSearchData } from "./apis/get";
import { createWtmData } from "./apis/add";
import { CategoryColors, CategoryItems, TagItems } from "./utils/data";
const wtm = {
    getData: getWtmData,
    getFilterData: getWtmFilterData,
    getSearchData: getWtmSearchData,
    createData: createWtmData,
};
export { wtm, TagItems, CategoryItems, CategoryColors, };
