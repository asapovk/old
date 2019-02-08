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
var useStyles_1 = __importDefault(require("./useStyles"));
var react_1 = require("react");
var ScrollBar_1 = __importDefault(require("./ScrollBar"));
//@ts-ignore
var isWebkit = !!window.webkitRequestAnimationFrame;
exports.default = (function (props) {
    var children = props.children, horizontal = props.horizontal, style = props.style, width = props.width, height = props.height, customCss = props.customCss;
    var scrollView = react_1.createRef();
    var styles = useStyles_1.default(horizontal, isWebkit, false, width, height, customCss);
    /**
     * FF returns null as reference
     * so we dont use it here
     */
    var id = "SV-" + Math.trunc(Math.random() * 10000000);
    return (core_1.jsx("div", { css: styles.root },
        core_1.jsx("div", { id: id, css: styles.scrollview, ref: scrollView, children: children, style: __assign({}, style) }),
        props.displayScroll !== false && (core_1.jsx(ScrollBar_1.default, { scrollViewId: id, horizontal: horizontal }))));
});
