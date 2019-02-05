"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var styles_1 = __importDefault(require("./styles"));
var TableHeaders_1 = __importDefault(require("./components/TableHeaders"));
var TableBody_1 = __importDefault(require("./components/TableBody"));
var TablePagination_1 = __importDefault(require("./components/TablePagination"));
exports.default = (function (props) {
    var style = styles_1.default();
    var _a = react_1.useState(1), page = _a[0], setPage = _a[1];
    var pageData = props.data;
    if (props.pagination) {
        var pageSize_1 = props.pagination.pageSize;
        pageData = props.data.filter(function (_, i) { return pageSize_1 * page >= (i + 1) && i >= pageSize_1 * page - pageSize_1; });
    }
    return (core_1.jsx("div", { css: style.container },
        !props.hideHeaders && (core_1.jsx(TableHeaders_1.default, __assign({}, props, { rowStyle: style.head.row, cellStyle: style.head.cell }))),
        core_1.jsx(TableBody_1.default, __assign({}, props, { data: pageData, style: style })),
        props.pagination && (core_1.jsx(TablePagination_1.default, { pageSize: props.pagination.pageSize, page: page, setPage: setPage, dataLength: props.data.length, containerStyle: style.pagination.container, buttonStyle: style.pagination.button }))));
});
