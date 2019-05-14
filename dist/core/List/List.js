"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var __1 = require("..");
var __2 = require("../..");
var ShowMore_1 = __importDefault(require("./components/ShowMore"));
var styles_1 = __importDefault(require("./styles"));
var PendingList_1 = __importDefault(require("./components/PendingList"));
String.prototype.stringHashCode = function () {
    var hash = 0;
    if (this.length == 0) {
        return hash.toString();
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString();
};
// DO NOT ASK ME ABOUT IT 
var Div = function (props) { return core_1.jsx("div", __assign({}, props)); };
exports.default = (function (props) {
    var styles = styles_1.default(props.narrowed);
    var _a = react_1.useState(props.minified || false), minified = _a[0], setMinified = _a[1];
    var pending = props.pending, pendingRows = props.pendingRows, className = props.className, rowRender = props.rowRender, groupKey = props.groupKey, groups = props.groups, dataIndex = props.dataIndex, onRowClick = props.onRowClick, expandForm = props.expandForm, moreLabel = props.moreLabel, lessLabel = props.lessLabel, noDataText = props.noDataText, minifiedRowsCount = props.minifiedRowsCount;
    if (pending) {
        return core_1.jsx(PendingList_1.default, __assign({}, props));
    }
    if (!props.data.length) {
        return (core_1.jsx(__1.Flexbox, { flex: 1, alignItems: 'center', justifyContent: 'center' },
            core_1.jsx(__2.C1, { ellipsis: true, color: 'lowlight', css: styles.groupTitle }, noDataText || 'Нет данных для отображения')));
    }
    var data = minified ? props.data.filter(function (_, index) { return index < (minifiedRowsCount || 3); }) : props.data;
    var needShowMore = props.minified && props.data.length > (minifiedRowsCount || 3);
    var Wrapper = props.narrowed ? __1.Widget : Div;
    var RowWrapper = props.narrowed ? __1.Flexbox : __1.Widget;
    if (groupKey && Array.isArray(groups)) {
        /**
         * Filter unique groups before render
         * show groups whose exists in current rows stack
         */
        var uniqueDataGroups_1 = data.filter(function (v, i, a) { return a.indexOf(v) === i; });
        var currentGroups = groups
            .filter(function (group) { return uniqueDataGroups_1
            .some(function (udg) { return udg.groupId === group.value; }); });
        return (core_1.jsx("div", { className: className },
            core_1.jsx(Wrapper, { decoration: 'none' }, currentGroups.map(function (group, index) { return (core_1.jsx(react_1.Fragment, { key: group.value + "-" + index },
                core_1.jsx(__1.Flexbox, { flex: 1, css: styles.groupTitleContainer },
                    core_1.jsx(__2.C1, { ellipsis: true, color: 'lowlight', css: styles.groupTitle, children: group.title })),
                data
                    .filter(function (row) { return row.groupId === group.value; })
                    .map(function (row, index) {
                    var rowId = dataIndex
                        ? (row[dataIndex] + index).stringHashCode()
                        : (JSON.stringify(row) + index).stringHashCode();
                    return (core_1.jsx(RowWrapper, { onClick: function () { return onRowClick && onRowClick(row); }, css: styles.row, key: "listrow-" + rowId }, rowRender(row)));
                }))); })),
            needShowMore && (core_1.jsx(ShowMore_1.default, { moreLabel: moreLabel, lessLabel: lessLabel, minified: minified, setMinified: function () { return setMinified(!minified); } }))));
    }
    return (core_1.jsx("div", { className: className },
        core_1.jsx(Wrapper, { decoration: 'none' }, data.map(function (row, index) {
            var rowId = dataIndex
                ? (row[dataIndex] + index).stringHashCode()
                : (JSON.stringify(row) + index).stringHashCode();
            return (core_1.jsx(RowWrapper, { onClick: function () { return onRowClick && onRowClick(row); }, css: styles.row, key: "listrow-" + rowId }, rowRender(row)));
        })),
        needShowMore && (core_1.jsx(ShowMore_1.default, { moreLabel: moreLabel, lessLabel: lessLabel, minified: minified, setMinified: function () { return setMinified(!minified); } }))));
});
