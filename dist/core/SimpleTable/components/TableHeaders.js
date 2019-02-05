"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../..");
exports.default = (function (props) {
    var columns = props.columns, rowStyle = props.rowStyle, cellStyle = props.cellStyle;
    return (core_1.jsx(__1.Flexbox, { css: rowStyle }, columns.map(function (column, index) { return (core_1.jsx("div", { key: "header-" + index, css: cellStyle(column.width, column.borders), children: column.title })); })));
});
