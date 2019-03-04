"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var styles_1 = require("../styles");
var __1 = require("../..");
exports.default = (function (props) {
    var _a = react_1.useState(false), expanded = _a[0], setExpanded = _a[1];
    var styles = styles_1.rowStyles();
    var onRowClick = function () {
        props.onRowClick
            ? props.onRowClick(props.row)
            : setExpanded(!expanded);
    };
    return (core_1.jsx("div", { css: styles.rowWrapper },
        core_1.jsx("div", { css: styles.rowCellsWrapper, onClick: onRowClick }, props.columns.map(function (column, index) { return (core_1.jsx("div", { key: "rc-" + index, css: styles.rowCell({ expanded: expanded, borders: column.borders, alignment: column.alignment, expandForm: props.expandForm }), children: (column.dataIndex === 'actionColumn'
                ? core_1.jsx(__1.Icon, { type: 'right', css: styles.icon({ expanded: expanded }) })
                : column.render(props.row, props.row[column.dataIndex])) })); })),
        props.expandForm && (core_1.jsx("div", { css: styles.expandForm({ expanded: expanded, columnsLength: props.columns.length }), children: props.expandForm.render(props.row) }))));
});
