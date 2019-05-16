"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = require("../styles");
exports.default = (function (props) {
    var hs = styles_1.headerStyles();
    var columns = props.columns;
    return (core_1.jsx("div", { css: hs.headerWrapper }, columns.map(function (column, index) {
        var alignment = column.alignment, borders = column.borders, width = column.width, dataIndex = column.dataIndex, title = column.title;
        var isAction = dataIndex === 'actionColumn';
        var css = hs.headerCell({
            isAction: isAction, alignment: alignment, borders: borders, width: width
        });
        return (core_1.jsx("div", { key: "HC-" + dataIndex + "-" + index, css: css, children: title }));
    })));
});
