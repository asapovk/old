"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var __1 = require("../..");
exports.default = (function (props) {
    var data = props.data, columns = props.columns, rowStyle = props.rowStyle, cellStyle = props.cellStyle;
    return (core_1.jsx(react_1.Fragment, null, data.map(function (item, index) { return (core_1.jsx(__1.Flexbox, { key: "row-" + index, css: rowStyle }, columns.map(function (col, keyIndex) { return (core_1.jsx("div", { key: "rowcell-" + keyIndex, css: cellStyle(col.width, col.borders), children: col.render(item, item[col.dataIndex]) })); }))); })));
});
