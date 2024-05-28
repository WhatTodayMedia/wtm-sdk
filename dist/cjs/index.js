"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryColors = exports.CategoryItems = exports.TagItems = exports.wtm = void 0;
const get_1 = require("./apis/get");
const add_1 = require("./apis/add");
const data_1 = require("./utils/data");
Object.defineProperty(exports, "CategoryColors", { enumerable: true, get: function () { return data_1.CategoryColors; } });
Object.defineProperty(exports, "CategoryItems", { enumerable: true, get: function () { return data_1.CategoryItems; } });
Object.defineProperty(exports, "TagItems", { enumerable: true, get: function () { return data_1.TagItems; } });
const wtm = {
    getData: get_1.getWtmData,
    getFilterData: get_1.getWtmFilterData,
    getSearchData: get_1.getWtmSearchData,
    createData: add_1.createWtmData,
};
exports.wtm = wtm;
