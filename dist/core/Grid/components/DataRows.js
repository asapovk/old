"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var _1 = require(".");
var styles_1 = require("../styles");
/**
 * Previous Expanded Row Id (ERI)
 * save to expand when appear after scroll
 */
var ERI;
exports.default = (function (props) {
    var groups = props.groups, groupKey = props.groupKey, columns = props.columns, data = props.data, currentPage = props.currentPage, expandForm = props.expandForm, containerId = props.containerId, hideHeaders = props.hideHeaders, onRowClick = props.onRowClick;
    var _a = react_1.useState(''), expandedRowId = _a[0], setExpandedRowId = _a[1];
    var minHeight = getMinHeight(containerId, hideHeaders, groupKey);
    var styles = styles_1.subHeaderStyles({ hideHeaders: hideHeaders });
    /**
     * Clear previous expand flag when currentPage has changed
     */
    react_1.useEffect(function () {
        setRowExpand('');
    }, [currentPage]);
    /**
     * Add event listener on table and execute when ERI exists
     */
    react_1.useEffect(function () {
        var onWindowScroll = function () {
            if (!ERI)
                return;
            var rect = getElementRect(ERI);
            rect && (rect.top <= minHeight)
                ? expandedRowId && setExpandedRowId('')
                : !expandedRowId && setExpandedRowId(ERI);
        };
        var viewport = document.querySelector('[data-viewport]');
        viewport && viewport.addEventListener('scroll', onWindowScroll);
        return function () {
            viewport && viewport.removeEventListener('scroll', onWindowScroll);
        };
    }, [expandedRowId]);
    /**
     * Expand/hide row
     * @param rowId Row id which should be expanded
     */
    var setRowExpand = function (rowId) {
        var settedRow = rowId === expandedRowId ? '' : rowId;
        ERI = settedRow;
        setExpandedRowId(settedRow);
    };
    var onClick = function (rowId, row) {
        if (onRowClick) {
            return onRowClick(row);
        }
        ;
        if (expandForm) {
            var rect = getElementRect(rowId);
            if (rect) {
                if (rect.top <= minHeight) {
                    var viewport = document.querySelector('[data-viewport]');
                    viewport && viewport.scrollTo({
                        top: viewport.scrollTop - minHeight + rect.top
                    });
                }
                ;
                setRowExpand(rowId);
            }
        }
    };
    /**
     * Show data with groups
     */
    if (groupKey && Array.isArray(groups)) {
        /**
         * Filter unique groups before render
         * show groups whose exists in current rows stack
         */
        var uniqueDataGroups_1 = data.filter(function (v, i, a) { return a.indexOf(v) === i; });
        var currentGroups = groups
            .filter(function (group) { return uniqueDataGroups_1
            .some(function (udg) { return udg.groupId === group.value; }); });
        return (core_1.jsx(react_1.Fragment, null, currentGroups.map(function (group, index) { return (core_1.jsx(react_1.Fragment, { key: group.value + "-" + index },
            core_1.jsx("div", { css: styles.subheader, children: group.title }),
            data
                .filter(function (row) { return row.groupId === group.value; })
                .map(function (row, index) {
                var rowId = (JSON.stringify(columns) + group.value.toString() + currentPage.toString() + index).stringHashCode();
                return (core_1.jsx(_1.Row, { key: rowId, rowId: rowId, row: row, columns: columns, expandForm: expandForm, onRowClick: function () { return onClick(rowId, row); }, expandedRowId: expandedRowId, withoutHeaders: !groupKey && hideHeaders }));
            }))); })));
    }
    return (core_1.jsx(react_1.Fragment, null, data.map(function (row, index) {
        var rowId = (JSON.stringify(columns) + currentPage.toString() + index).stringHashCode();
        return (core_1.jsx(_1.Row, { key: rowId, rowId: rowId, row: row, columns: columns, expandForm: expandForm, onRowClick: function () { return onClick(rowId, row); }, expandedRowId: expandedRowId, withoutHeaders: !groupKey && hideHeaders }));
    })));
});
/**
 * Get element rect by id
 * @param id Element id
 */
var getElementRect = function (id) {
    var el = document.getElementById(id);
    return el ? el.getBoundingClientRect() : null;
};
var getMinHeight = function (containerId, hideHeaders, groupKey) {
    var minHeight = 0;
    var gridContainer = document.getElementById(containerId);
    if (gridContainer) {
        if (!hideHeaders) {
            var headerContainer = gridContainer.children[0];
            minHeight += headerContainer.offsetHeight;
        }
        if (groupKey) {
            var groupContainer = gridContainer.children[1];
            minHeight += groupContainer.offsetHeight;
        }
    }
    return minHeight;
};
