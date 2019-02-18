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
var __1 = require("../..");
var Forms_1 = __importDefault(require("./Forms"));
exports.default = (function (props) {
    var styles = props.styles;
    return (core_1.jsx(__1.Flexbox, { css: styles.login.container },
        core_1.jsx(__1.Flexbox, { css: styles.login.welcome, flexDirection: "column" },
            props.logo && core_1.jsx("div", { css: styles.login.logo }, props.logo),
            props.title && core_1.jsx("span", { css: styles.login.title }, props.title),
            core_1.jsx(Forms_1.default, __assign({}, props)),
            core_1.jsx(__1.Flexbox, { css: styles.login.actions.container },
                core_1.jsx(__1.Flexbox, { css: styles.login.actions.wrapper }, props.actions.map(function (action, index) {
                    return core_1.jsx(__1.Flexbox, { key: index, css: styles.login.actions.item, onClick: action.onAction, flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" },
                        core_1.jsx(__1.Icon, { css: styles.login.actions.icon, type: action.icon }),
                        core_1.jsx(__1.C1, { link: true, align: 'center' }, action.title));
                }))))));
});
