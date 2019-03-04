"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = require("../styles");
exports.default = (function (props) {
    var styles = styles_1.headerStyles();
    return (core_1.jsx("div", { css: styles.headerWrapper }, props.columns.map(function (column, index) { return (core_1.jsx("div", { key: "HC-" + column.dataIndex + "-" + index, css: styles.headerCell({
            alignment: column.alignment,
            borders: column.borders
        }), children: (column.dataIndex !== 'actionColumn' && column.title) })); })));
});
