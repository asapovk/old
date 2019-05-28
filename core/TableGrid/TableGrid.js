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
var components_1 = require("./components");
String.prototype.stringHashCode = function () {
    var hash = 0;
    if (this.length == 0) {
        return hash.toString();
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString();
};
var id = "GRID-" + Math.trunc(Math.random() * 10000000);
exports.default = (function (props) {
    var data = props.data, noDataComponent = props.noDataComponent, pagination = props.pagination, hideHeaders = props.hideHeaders, groupKey = props.groupKey;
    var columns = getColumns(props.columns, props.expandForm);
    var styles = styles_1.default();
    var _a = react_1.useState(1), currentPage = _a[0], setCurrentPage = _a[1];
    react_1.useLayoutEffect(function () {
        if (pagination) {
            setCurrentPage(1);
        }
    }, [data]);
    var setPage = function (page) {
        var viewport = document.querySelector('[data-viewport]');
        viewport && viewport.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentPage(page);
    };
    if (!data || data.length <= 0) {
        return (core_1.jsx("div", { css: styles.wrapper, children: (noDataComponent
                ? noDataComponent
                : core_1.jsx("div", { css: styles.noDataContainer, children: '\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445' })) }));
    }
    var pageData = data;
    if (pagination) {
        var pageSize_1 = pagination.pageSize;
        pageData = data
            .filter(function (_, i) { return (pageSize_1 * currentPage >= (i + 1)
            && i >= pageSize_1 * currentPage - pageSize_1); });
    }
    return (core_1.jsx(react_1.Fragment, null,
        core_1.jsx("div", { css: styles.wrapper },
            core_1.jsx("div", { css: styles.container, id: id },
                !hideHeaders && core_1.jsx(components_1.Header, { columns: columns }),
                core_1.jsx(components_1.DataRows, __assign({}, props, { currentPage: currentPage, data: pageData, columns: columns, containerId: id })))),
        pagination && (core_1.jsx(components_1.Pagination, { currentPage: currentPage, setCurrentPage: setPage, dataLength: data.length, pagination: pagination }))));
});
var getColumns = function (columns, expandForm) {
    var mappedColumns = columns.map(function (column) { return (__assign({}, column, { render: column.render || (function (row, value) { return value; }) })); });
    if (expandForm) {
        mappedColumns.push({
            alignment: 'flex-end',
            dataIndex: 'actionColumn',
            width: 40
        });
    }
    return mappedColumns;
};
