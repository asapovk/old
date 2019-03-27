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
var hooks_1 = require("../../hooks");
var Items_1 = __importDefault(require("./Items"));
var Bars_1 = require("./Bars");
var reducer = function (state, action) {
    switch (action.type) {
        case 'openMenu':
            state.choose = true;
            return __assign({}, state);
        case 'addItem':
            state.opened.push(action.payload);
            state.choose = false;
            return __assign({}, state);
        case 'setItem':
            state.opened = [action.payload];
            return __assign({}, state);
        case 'back':
            state.choose
                ? state.choose = false
                : state.opened.pop();
            return __assign({}, state);
        case 'close':
            state.choose = false;
            state.opened = state.opened.slice(0, 1);
            return __assign({}, state);
        case 'exit':
            state.choose = false;
            state.opened = [];
            return __assign({}, state);
        default:
            return state;
    }
};
exports.default = react_1.forwardRef(function (props, ref) {
    if (!props.data) {
        return core_1.jsx("div", null, props.noData || 'Нет данных');
    }
    var browser = hooks_1.useBrowser();
    var styles = styles_1.default(browser.isMobile);
    var capacity = browser.isDesktop
        ? (props.capacity && props.capacity[0]) || 5
        : (props.capacity && props.capacity[1]) || 1;
    var initialState = {
        opened: browser.isMobile ? [] : [0],
        choose: false
    };
    var _a = react_1.useReducer(reducer, initialState), state = _a[0], dispatch = _a[1];
    react_1.useLayoutEffect(function () {
        if (browser.isMobile) {
            dispatch({ type: 'exit' });
        }
        else if (!state.opened.length) {
            dispatch({ type: 'setItem', payload: 0 });
        }
    }, [browser]);
    react_1.useImperativeHandle(ref, function () { return ({
        exit: function () {
            dispatch({ type: 'exit' });
        }
    }); });
    return (core_1.jsx(index_1.Flexbox, { css: styles.container, className: props.className },
        (state.opened.length > 1 || state.choose)
            && !browser.isMobile
            && core_1.jsx(Bars_1.LeftBar, { styles: styles, onBack: function () { return dispatch({ type: 'back' }); }, onClose: function () { return dispatch({ type: 'close' }); } }),
        core_1.jsx(index_1.Flexbox, { css: styles.items },
            (browser.isMobile
                ? !state.opened.length
                : (state.opened.length === 1 && !state.choose))
                && core_1.jsx(Menu_1.default, __assign({}, props, { onChoose: function (i) {
                        dispatch({ type: 'setItem', payload: i });
                        browser.isMobile && props.onEnterMobile && props.onEnterMobile(i);
                    }, active: state.opened[0], styles: styles, isMobile: browser.isMobile })),
            props.items &&
                core_1.jsx(Items_1.default, { opened: state.opened, data: props.data, items: props.items, styles: styles, breakpoints: props.breakpoints }),
            state.choose &&
                core_1.jsx(Menu_1.default, __assign({}, props, { onChoose: function (i) { return dispatch({ type: 'addItem', payload: i }); }, styles: styles, side: state.opened.length > 1, isMobile: browser.isMobile }))),
        state.opened.length < capacity
            && !browser.isMobile
            && props.data.length > 1
            && !state.choose
            && core_1.jsx(Bars_1.RightBar, { styles: styles, onAdd: function () { return dispatch({ type: 'openMenu' }); } })));
});
