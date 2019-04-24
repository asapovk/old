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
var core_2 = require("../../../../core");
var duration = 200;
var transitionStyles = {
    entering: {
        opacity: 0,
    },
    entered: {
        opacity: 1,
    },
    exiting: {
        opacity: 0,
    },
    exited: {
        opacity: 0,
    },
};
exports.default = (function (props) {
    return (core_1.jsx(react_transition_group_1.CSSTransition, { timeout: duration, in: props.active, appear: true, children: function (state) { return (core_1.jsx(core_2.Flexbox, { css: function (theme) { return core_1.css(__assign({ backgroundColor: theme.background2.hex, zIndex: 1, padding: '3rem 4rem', transition: "transform " + duration + "ms ease-out, opacity " + duration * 2 + "ms ease-out", willChange: 'transform, opacity', flex: 1 }, transitionStyles[state])); } },
            core_1.jsx(core_2.Tabs, { items: menuElements, activeItem: 0 }),
            core_1.jsx(core_2.Widget, null))); } }));
});
var menuElements = [
    { title: 'Счет', path: "/", component: core_1.jsx(core_2.Widget, { children: "\u0421\u0447\u0435\u0442" }) },
    { title: 'История', path: "/", component: core_1.jsx(core_2.Widget, { children: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F" }) },
    { title: 'Поддержка', path: "/", component: core_1.jsx(core_2.Widget, { children: "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430" }) },
    { title: 'Настройки', path: "/", component: core_1.jsx(core_2.Widget, { children: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438" }) }
];
