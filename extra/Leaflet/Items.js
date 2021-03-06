"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var __1 = require("../..");
var Icon_1 = require("../../core/Icon");
exports.default = (function (props) {
    var data = props.data, styles = props.styles, items = props.items, opened = props.opened;
    var breakpoints = props.breakpoints || [4, 6];
    return (core_1.jsx(react_1.Fragment, null, opened.map(function (dataIndex, index) { return (core_1.jsx(__1.Flexbox, { column: true, key: "li-" + index, css: styles.item.container(opened.length > breakpoints[0]), children: items.map(function (item, gi) { return (core_1.jsx(react_1.Fragment, { key: "li-gr-" + gi },
            core_1.jsx("div", { css: styles.item.header(gi) },
                core_1.jsx("div", null,
                    (item.iconKey && data[dataIndex][item.iconKey]) && (core_1.jsx(Icon_1.Icon, { type: data[dataIndex][item.iconKey] })),
                    core_1.jsx(__1.D3, { ellipsis: true, underline: true, children: item.title
                            ? item.title
                            : item.titleKey && data[dataIndex][item.titleKey] }))),
            core_1.jsx(Grid, { rows: item.rows, data: data, index: index, dataIndex: dataIndex, styles: styles, opened: opened, breakpoints: breakpoints }))); }) })); })));
});
var Grid = function (props) {
    var rows = props.rows, data = props.data, index = props.index, dataIndex = props.dataIndex, styles = props.styles, opened = props.opened, breakpoints = props.breakpoints;
    var isFirst = index === 0;
    return rows
        .filter(function (row) { return data[dataIndex][row.dataKey]; })
        .map(function (row, ri) { return (core_1.jsx(__1.Flexbox, { key: "li-gr-row-" + ri, css: styles.item.grid },
        (opened.length < breakpoints[0] || isFirst) && row.name && (core_1.jsx(__1.T1, { color: "lowlight", css: core_1.css({ flexShrink: 0 }), children: row.name })),
        row.name && (opened.length < breakpoints[1] || isFirst) && (core_1.jsx("hr", null)),
        core_1.jsx(__1.T1, { css: core_1.css({ flexShrink: 0 }), children: data[dataIndex][row.dataKey] }))); });
};
