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
exports.default = (function (props) {
    var styles = styles_1.default(props.narrowed);
    var _a = react_1.useState(props.minified || false), minified = _a[0], setMinified = _a[1];
    var pending = props.pending, className = props.className, rowRender = props.rowRender, groupKey = props.groupKey, groups = props.groups, minifiedRowsCount = props.minifiedRowsCount, onRowClick = props.onRowClick, expandForm = props.expandForm, moreLabel = props.moreLabel, lessLabel = props.lessLabel;
    if (pending) {
        return core_1.jsx(PendingList_1.default, __assign({}, props));
    }
    if (!props.data.length) {
        return (core_1.jsx(__1.Flexbox, { css: styles.groupTitle, mt: '1rem', alignSelf: 'center' },
            core_1.jsx(__2.C1, { ellipsis: true, color: 'lowlight', children: '\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F' })));
    }
    var data = minified ? props.data.filter(function (_, index) { return index < (minifiedRowsCount || 3); }) : props.data;
    var needShowMore = props.minified && props.data.length > (minifiedRowsCount || 3);
    var Wrapper = props.narrowed ? __1.Widget : __1.Flexbox;
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
            core_1.jsx(Wrapper, { flex: 1, column: true, decoration: 'none' }, currentGroups.map(function (group, index) { return (core_1.jsx(react_1.Fragment, { key: group.value + "-" + index },
                core_1.jsx(__1.Flexbox, { css: styles.groupTitle },
                    core_1.jsx(__2.C1, { ellipsis: true, color: 'lowlight', children: group.title })),
                data
                    .filter(function (row) { return row.groupId === group.value; })
                    .map(function (row, index) { return (core_1.jsx(RowWrapper, { onClick: function () { return onRowClick && onRowClick(row); }, css: styles.row, key: "row-" + index }, rowRender(row))); }))); })),
            needShowMore && (core_1.jsx(ShowMore_1.default, { moreLabel: moreLabel, lessLabel: lessLabel, minified: minified, setMinified: function () { return setMinified(!minified); } }))));
    }
    return (core_1.jsx("div", { className: className },
        core_1.jsx(Wrapper, { flex: 1, column: true, decoration: 'none' }, data.map(function (row, index) { return (core_1.jsx(RowWrapper, { onClick: function () { return onRowClick && onRowClick(row); }, css: styles.row, key: "row-" + index }, rowRender(row))); })),
        needShowMore && (core_1.jsx(ShowMore_1.default, { moreLabel: moreLabel, lessLabel: lessLabel, minified: minified, setMinified: function () { return setMinified(!minified); } }))));
});
