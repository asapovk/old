"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../..");
var styles_1 = require("../styles");
exports.default = (function (props) {
    var expandedRowId = props.expandedRowId, rowId = props.rowId, onRowClick = props.onRowClick, columns = props.columns, row = props.row, expandForm = props.expandForm;
    var rs = styles_1.rowStyles({
        expanded: expandedRowId === rowId,
        withOpacity: expandedRowId && (expandedRowId !== rowId)
    });
    var ExpandIcon = function () { return (core_1.jsx(__1.Icon, { size: '1.25rem', color: 'lowlight', type: 'right', css: rs.icon })); };
    return (core_1.jsx("div", { id: rowId, css: rs.rowWrapper },
        core_1.jsx("div", { css: rs.rowCellsWrapper, onClick: onRowClick, children: (columns.map(function (column, index) {
                var borders = column.borders, alignment = column.alignment, width = column.width, dataIndex = column.dataIndex, render = column.render;
                var isAction = dataIndex === 'actionColumn';
                var css = rs.rowCell({
                    isAction: isAction, borders: borders, alignment: alignment, width: width
                });
                return (core_1.jsx("div", { key: "rc-" + index, css: css, children: (isAction
                        ? core_1.jsx(ExpandIcon, null)
                        : render(row, row[dataIndex])) }));
            })) }),
        expandForm && (core_1.jsx("div", { css: rs.expandForm, children: expandForm.render(row) }))));
});
