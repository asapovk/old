"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../..");
exports.default = (function (props) {
    var columns = props.columns, containerStyle = props.containerStyle, headerCellStyle = props.headerCellStyle, groupTitleStyle = props.groupTitleStyle, title = props.title;
    return (core_1.jsx(__1.Flexbox, { css: containerStyle, justifyContent: 'center' },
        columns.map(function (col, keyIndex) { return (core_1.jsx("div", { key: "rowcell-" + keyIndex, css: headerCellStyle(col.width, col.borders) })); }),
        core_1.jsx("div", { css: groupTitleStyle }, title)));
});
