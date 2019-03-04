"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var _1 = require(".");
exports.default = (function (props) {
    var groups = props.groups, groupKey = props.groupKey, columns = props.columns, hideHeaders = props.hideHeaders, data = props.data, currentPage = props.currentPage, expandForm = props.expandForm;
    if (groupKey && (Array.isArray(groups) && groups.length > 0)) {
        return (core_1.jsx(react_1.Fragment, null, groups.map(function (group, index) { return (core_1.jsx(react_1.Fragment, { key: group.value + "-" + index },
            core_1.jsx(_1.SubHeader, { key: "sh-" + group.value + "-" + index, title: group.title, columnsLength: columns.length, hideHeaders: hideHeaders }),
            data.filter(function (row) { return row.groupId === group.value; }).map(function (row, index) { return (core_1.jsx(_1.Row, { key: (JSON.stringify(columns) + group.value.toString() + currentPage.toString() + index).hashCode(), row: row, columns: columns, expandForm: expandForm, onRowClick: props.onRowClick })); }))); })));
    }
    return (core_1.jsx(react_1.Fragment, null, data.map(function (row, index) { return (core_1.jsx(_1.Row, { key: (JSON.stringify(columns) + currentPage.toString() + index).hashCode(), row: row, columns: columns, expandForm: expandForm, onRowClick: props.onRowClick })); })));
});
