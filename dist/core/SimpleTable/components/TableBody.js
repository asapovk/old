"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var GroupHeaderRow_1 = __importDefault(require("./GroupHeaderRow"));
var DataRows_1 = __importDefault(require("./DataRows"));
exports.default = (function (props) {
    var data = props.data, columns = props.columns, groupKey = props.groupKey, groups = props.groups, style = props.style;
    var cols = columns.map(function (col) {
        if (!col.render) {
            col.render = function (row, value) { return value; };
        }
        return col;
    });
    if (groupKey && groups) {
        return (core_1.jsx(react_1.Fragment, null, groups.map(function (group, index) { return (core_1.jsx("div", { key: "group-" + index },
            core_1.jsx(GroupHeaderRow_1.default, { columns: cols, title: group.title, containerStyle: style.group.container, headerCellStyle: style.group.cell, groupTitleStyle: style.group.title }),
            core_1.jsx(DataRows_1.default, { data: data.filter(function (i) { return i[groupKey] === group.value; }), columns: cols, rowStyle: style.data.row, cellStyle: style.data.cell }))); })));
    }
    return (core_1.jsx(DataRows_1.default, { data: data, columns: cols, rowStyle: style.data.row, cellStyle: style.data.cell }));
});
