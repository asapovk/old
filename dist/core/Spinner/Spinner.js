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
var Styles_1 = __importDefault(require("./Styles"));
exports.default = (function (props) {
    var spinning = props.spinning, center = props.center, className = props.className, dark = props.dark, children = props.children, style = props.style;
    var styles = Styles_1.default();
    if (!spinning) {
        return children || null;
    }
    if (center) {
        return (core_1.jsx("div", { css: styles.centeredContainer, style: style, className: className },
            core_1.jsx("div", { children: core_1.jsx(Spin, __assign({}, props)) })));
    }
    return core_1.jsx(Spin, __assign({}, props));
});
var Spin = function (props) {
    var styles = Styles_1.default();
    return (core_1.jsx("div", { css: styles.spinner, style: props.style, className: props.className }, Array(12).fill("").map(function (e, i) { return core_1.jsx("div", { key: i }); })));
};
