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
    var data = props.data, noDataComponent = props.noDataComponent, pagination = props.pagination, hideHeaders = props.hideHeaders, columns = props.columns;
    var styles = styles_1.default();
    var _a = react_1.useState(1), currentPage = _a[0], setCurrentPage = _a[1];
    if (!data || data.length <= 0) {
        return (noDataComponent
            ? noDataComponent
            : core_1.jsx("div", { css: styles.noDataContainer }, "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"));
    }
    var pageData = data;
    if (pagination) {
        var pageSize_1 = pagination.pageSize;
        pageData = data
            .filter(function (_, i) { return pageSize_1 * currentPage >= (i + 1) && i >= pageSize_1 * currentPage - pageSize_1; });
    }
    return (core_1.jsx("div", { css: styles.tableContainer },
        !hideHeaders && (core_1.jsx(TableRow_1.default, { header: true, columns: columns, styles: styles })),
        core_1.jsx(TableBody_1.default, __assign({}, props, { data: pageData, styles: styles })),
        pagination && (core_1.jsx(TablePagination_1.default, { currentPage: currentPage, setCurrentPage: setCurrentPage, dataLength: data.length, styles: styles, pagination: pagination }))));
});
