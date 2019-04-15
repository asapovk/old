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
var styles_1 = __importDefault(require("./styles"));
var __1 = require("../..");
var Flexbox_1 = require("../Flexbox");
exports.default = (function (props) {
    var spinning = props.spinning, center = props.center, className = props.className, dark = props.dark, children = props.children, style = props.style, defaultElement = props.defaultElement;
    var styles = styles_1.default(dark);
    if (!spinning) {
        return children || null;
    }
    var El = (core_1.jsx(Flexbox_1.Flexbox, { column: true, justifyContent: 'center', alignItems: 'center' },
        defaultElement
            ? core_1.jsx(Spin, __assign({}, props))
            : core_1.jsx(Logo, __assign({}, props)),
        props.loadingText && (core_1.jsx(__1.C2, { bold: true, color: "lowlight", css: core_1.css({ marginTop: "2.5rem" }), children: props.loadingText }))));
    if (center) {
        return (core_1.jsx("div", { css: styles.centeredContainer, style: style, className: className }, El));
    }
    return El;
});
var Spin = function (props) {
    var styles = styles_1.default();
    var startDelay = 1.1;
    return (core_1.jsx("div", { css: styles.spinner, style: props.style, className: props.className }, Array(12).fill("").map(function (e, i) {
        return core_1.jsx("div", { key: i, css: core_1.css({
                transform: "rotate(" + i * 30 + "deg)",
                animationDelay: "-" + (startDelay - i / 10).toFixed(1) + "s !important"
            }) });
    })));
};
var Logo = function (props) {
    var styles = styles_1.default();
    return (core_1.jsx("div", { css: styles.container, className: props.className },
        core_1.jsx("div", { css: styles.triangleContainer },
            core_1.jsx("div", null, Array(3)
                .fill("")
                .map(function (_, i) {
                return core_1.jsx("div", { key: i, css: styles.circle(i) });
            })))));
};
