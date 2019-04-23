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
var react_transition_group_1 = require("react-transition-group");
var duration = 300;
var transitionStyles = {
    entering: { transform: 'skewX(-4deg) translateX(-50rem)' },
    entered: { transform: 'skewX(-4deg) translateX(-6rem)' },
    exiting: { transform: 'skewX(-4deg) translateX(-50rem)' },
    exited: { transform: 'skewX(-4deg) translateX(-50rem)' },
};
exports.default = (function (props) {
    return (core_1.jsx(react_transition_group_1.CSSTransition, { timeout: duration, in: props.active, appear: true, onExited: function () { return props.setView('Main'); }, children: function (state) { return core_1.jsx("div", { css: function (theme) { return core_1.css(__assign({ width: '42rem', backgroundColor: theme.interface.hex, position: 'fixed', top: 0, left: 0, bottom: 0, right: 0, transition: "transform " + duration + "ms ease-out", willChange: 'transform' }, transitionStyles[state])); } }); } }));
});
