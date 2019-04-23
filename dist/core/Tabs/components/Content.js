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
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var react_transition_group_1 = require("react-transition-group");
var __1 = require("../..");
exports.default = (function (props) {
    var items = props.items, activeItemIndex = props.activeItemIndex;
    var _a = react_1.useState(activeItemIndex || 0), prevIndex = _a[0], setPrevIndex = _a[1];
    var duration = 300;
    var transitionStyles = {
        entering: {
            opacity: 0,
            position: 'relative',
            transform: "translateX(" + (prevIndex < activeItemIndex ? '1.5rem' : '-1.5rem') + ")",
        },
        entered: {
            opacity: 1,
            position: 'relative',
            transform: 'translateX(0)',
        },
        exiting: {
            opacity: 0,
            position: 'absolute',
            transform: "translateX(" + (prevIndex > activeItemIndex ? '1.5rem' : '-1.5rem') + ")",
        },
        exited: {
            opacity: 1,
            position: 'absolute',
            transform: 'translateX(0)'
        },
    };
    return (core_1.jsx(__1.Flexbox, { alignItems: 'center' }, items.map(function (item, index) {
        var isActive = index === activeItemIndex;
        if (!item.component)
            return null;
        return (core_1.jsx(react_transition_group_1.CSSTransition, { key: index, timeout: {
                enter: 0,
                exit: duration
            }, in: isActive, onExit: function () { return setPrevIndex(index); }, unmountOnExit: true }, function (state) {
            return (core_1.jsx("div", { css: core_1.css(__assign({ transition: "all " + duration + "ms ease-in-out", willChange: 'transform' }, transitionStyles[state])) }, item.component));
        }));
    })));
});
