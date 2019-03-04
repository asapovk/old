"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var _1 = require(".");
var styles_1 = require("../styles");
exports.default = (function (props) {
    var groups = props.groups, groupKey = props.groupKey, columns = props.columns, hideHeaders = props.hideHeaders, data = props.data, currentPage = props.currentPage, expandForm = props.expandForm;
    var styles = styles_1.subHeaderStyles({
        columnsLength: props.columns.length,
        hideHeaders: props.hideHeaders
    });
    if (groupKey && Array.isArray(groups)) {
        var uniqueDataGroups_1 = data.filter(function (v, i, a) { return a.indexOf(v) === i; });
        var currentGroups = groups.filter(function (group) { return uniqueDataGroups_1.some(function (udg) { return udg.groupId === group.value; }); });
        return (core_1.jsx(react_1.Fragment, null, currentGroups && currentGroups.map(function (group, index) { return (core_1.jsx(react_1.Fragment, { key: group.value + "-" + index },
            core_1.jsx("div", { key: "sh-" + group.value + "-" + index, css: styles.subheader, children: group.title }),
            data
                .filter(function (row) { return row.groupId === group.value; })
                .map(function (row, index) { return (core_1.jsx(_1.Row, { key: (JSON.stringify(columns) + group.value.toString() + currentPage.toString() + index).hashCode(), row: row, columns: columns, expandForm: expandForm, onRowClick: props.onRowClick })); }))); })));
    }
    return (core_1.jsx(react_1.Fragment, null, data.map(function (row, index) { return (core_1.jsx(_1.Row, { key: (JSON.stringify(columns) + currentPage.toString() + index).hashCode(), row: row, columns: columns, expandForm: expandForm, onRowClick: props.onRowClick })); })));
});
