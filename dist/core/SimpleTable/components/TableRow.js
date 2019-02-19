"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var __1 = require("../..");
exports.default = (function (props) {
    var row = props.row, columns = props.columns, styles = props.styles, header = props.header, groupHeader = props.groupHeader, expandForm = props.expandForm, last = props.last, hideHeaders = props.hideHeaders, onRowClick = props.onRowClick;
    var _a = react_1.useState(false), expanded = _a[0], setExpanded = _a[1];
    var rowRef = react_1.useRef(null);
    // function setRowHeight(expanded: boolean) {
    //     if (rowRef && rowRef.current) {
    //         const row = rowRef.current;
    //         const nodes = row.childNodes as NodeListOf<HTMLDivElement>;
    //         row.style.height = (!expanded
    //             ? nodes[0].offsetHeight
    //             : nodes[0].offsetHeight + nodes[1].offsetHeight) + 'px';
    //     }
    // }
    // useEffect(() => {
    //     setRowHeight(expanded);
    // }, []);
    function onClick() {
        if (!header) {
            // setRowHeight(!expanded);
            setExpanded(!expanded);
        }
    }
    return (core_1.jsx("div", { css: styles.rowContainer({ header: header, hideHeaders: hideHeaders }), ref: rowRef },
        core_1.jsx(__1.Flexbox, { css: styles.row({ header: header, groupHeader: groupHeader, last: last }), onClick: onRowClick ? function () { return onRowClick(row); } : onClick },
            columns.map(function (col, keyIndex) { return (core_1.jsx("div", { key: "rowcell-" + keyIndex, css: styles.cell(col.width, col.borders, col.alignment), children: row ? col.render(row, row[col.dataIndex]) : groupHeader ? '' : col.title })); }),
            expandForm && (core_1.jsx("div", { key: "rowcell-action", css: styles.actionCell, children: (!header && (core_1.jsx(__1.Icon, { type: 'right', css: styles.actionIcon(expanded) }))) }))),
        expandForm && (core_1.jsx("div", { css: styles.expandRow(expanded), children: row && expandForm.render(row) }))));
});
