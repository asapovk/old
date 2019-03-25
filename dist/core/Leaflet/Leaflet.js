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
var index_1 = require("../index");
var styles_1 = __importDefault(require("./styles"));
var Menu_1 = __importDefault(require("./Menu"));
var reducer = function (state, action) {
    switch (action.type) {
        case 'openMenu':
            state.showMenu = true;
            return __assign({}, state);
        case 'addItem':
            state.items.push(action.payload);
            state.showMenu = false;
            return __assign({}, state);
        case 'setItem':
            state.items = [action.payload];
            return __assign({}, state);
        case 'back':
            state.showMenu
                ? state.showMenu = false
                : state.items.pop();
            return __assign({}, state);
        case 'close':
            state.items = state.items.slice(0, 1);
            return __assign({}, state);
        default:
            return state;
    }
};
exports.default = (function (props) {
    var initialState = {
        items: [0],
        showMenu: false
    };
    var _a = react_1.useReducer(reducer, initialState), state = _a[0], dispatch = _a[1];
    var styles = styles_1.default();
    var capacity = props.capacity || 5;
    if (!props.data) {
        return core_1.jsx("div", null, props.noData || 'Нет данных');
    }
    return (core_1.jsx(index_1.Flexbox, { css: styles.container, className: props.className },
        state.items.length > 1 &&
            core_1.jsx(LeftBar, { styles: styles, onBack: function () { return dispatch({ type: 'back' }); }, onClose: function () { return dispatch({ type: 'close' }); } }),
        core_1.jsx(index_1.Flexbox, { flex: 1, css: styles.items },
            (state.items.length === 1 && !state.showMenu)
                && core_1.jsx(Menu_1.default, { data: props.data, groups: props.groups, onChoose: function (i) { return dispatch({ type: 'setItem', payload: i }); }, active: state.items[0], styles: styles, nameKey: props.nameKey }),
            core_1.jsx(ItemsGrid, { items: state.items, data: props.data, grids: props.grids, styles: styles }),
            state.showMenu &&
                core_1.jsx(Menu_1.default, { data: props.data, groups: props.groups, onChoose: function (i) { return dispatch({ type: 'addItem', payload: i }); }, styles: styles, nameKey: props.nameKey })),
        state.items.length < capacity &&
            core_1.jsx(RightBar, { styles: styles, onAdd: function () { return dispatch({ type: 'openMenu' }); } })));
});
var LeftBar = function (props) {
    return (core_1.jsx(index_1.Flexbox, { css: props.styles.leftBar, column: true },
        core_1.jsx(index_1.Icon, { type: 'arrow-left', shape: 'oval', background: '#fff', color: 'highlight', onClick: function () { return props.onBack(); }, size: '1.25rem' }),
        core_1.jsx(index_1.Icon, { type: 'close', shape: 'oval', background: '#fff', color: 'highlight', size: '1.25rem', onClick: function () { return props.onClose(); } })));
};
var RightBar = function (props) {
    return (core_1.jsx(index_1.Flexbox, { css: props.styles.rightBar, column: true },
        core_1.jsx(index_1.Flexbox, { alignItems: 'center', column: true, onClick: function () { return props.onAdd(); } },
            core_1.jsx(index_1.Icon, { type: 'add', size: '2rem', shape: 'oval', background: '#fff', color: 'lowlight' }),
            core_1.jsx(index_1.C2, { color: 'lowlight', pt: '1rem', align: 'center', children: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E' }))));
};
var ItemsGrid = function (props) {
    return props.items.map(function (key, index) { return (core_1.jsx(index_1.Flexbox, { key: 'li-' + index, css: props.styles.item, column: true }, props.grids.map(function (grid, gi) { return (core_1.jsx(index_1.Flexbox, { key: 'li-gr-' + gi, column: true, mb: '2rem' },
        core_1.jsx(index_1.D3, { ellipsis: true, underline: true }, grid.title
            ? grid.title
            : grid.titleKey
                && props.data[key][grid.titleKey]),
        grid.rows.filter(function (row) { return props.data[key][row.dataKey]; }).map(function (row, ri) { return (core_1.jsx(index_1.Flexbox, { key: 'li-gr-row-' + ri, css: props.styles.grid },
            (props.items.length < 4 || index === 0)
                && row.name
                && core_1.jsx(index_1.T1, { color: 'lowlight', css: core_1.css({ flexShrink: 0 }), children: row.name }),
            core_1.jsx(index_1.HR, { dotted: true, color: 'light', css: core_1.css({ margin: '0.35rem 0.5rem', flex: 1 }) }),
            core_1.jsx(index_1.T1, null, props.data[key][row.dataKey]))); }))); }))); });
};
