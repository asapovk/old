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
var TableBody_1 = __importDefault(require("./components/TableBody"));
var TablePagination_1 = __importDefault(require("./components/TablePagination"));
var TableRow_1 = __importDefault(require("./components/TableRow"));
exports.default = (function (props) {
    var styles = styles_1.default();
    var _a = react_1.useState(1), page = _a[0], setPage = _a[1];
    var pageData = props.data;
    if (props.pagination) {
        var pageSize_1 = props.pagination.pageSize;
        pageData = props.data
            .filter(function (_, i) { return pageSize_1 * page >= (i + 1) && i >= pageSize_1 * page - pageSize_1; });
    }
    return (core_1.jsx("div", { css: styles.tableContainer },
        !props.hideHeaders && (core_1.jsx(TableRow_1.default, { header: true, columns: props.columns, styles: styles })),
        core_1.jsx(TableBody_1.default, __assign({}, props, { data: pageData, styles: styles })),
        props.pagination && (core_1.jsx(TablePagination_1.default, { pageSize: props.pagination.pageSize, page: page, setPage: setPage, dataLength: props.data.length, styles: styles }))));
});
