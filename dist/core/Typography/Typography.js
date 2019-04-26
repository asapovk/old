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
var hooks_1 = require("../../hooks");
var react_1 = require("react");
var Formatter_1 = __importDefault(require("./Formatter"));
var Decorator_1 = __importDefault(require("./Decorator"));
var Typography = react_1.forwardRef(function (props, ref) {
    var typography = hooks_1.useTypography()[props.type][props.size];
    var theme = hooks_1.useTheme().theme;
    var data = props.children && props.quotes
        ? props.children.toString().replace(/"([^"]*)"/g, '«$1»')
        : props.children;
    if (props.underline || props.action || props.menu) {
        return (core_1.jsx(Decorator_1.default, __assign({}, props, { typography: typography, theme: theme })));
    }
    else
        return core_1.jsx(props.tag, {
            ref: ref,
            className: props.className,
            onClick: !props.disabled ? props.onClick : undefined,
            css: core_1.css(__assign({}, typography, { display: props.type === 'caption' ? 'inline-block' : 'block', padding: props.p, paddingTop: props.pt, paddingLeft: props.pl, paddingRight: props.pr, paddingBottom: props.pb, margin: props.m, marginTop: props.mt, marginLeft: props.ml, marginRight: props.mr, marginBottom: props.mb, textAlign: props.align }), (!props.accent && props.color) && {
                color: theme[props.color].rgb
            }, props.accent && {
                color: theme.accents[props.accent].rgb
            }, props.background && {
                background: theme[props.background].rgb
            }, props.bold && {
                fontWeight: 'bold'
            }, props.link && {
                color: props.color
                    ? theme[props.color].hex
                    : theme.highlight.rgb,
                cursor: 'pointer'
            }, props.ellipsis && {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                minWidth: 0,
            }, (props.underline || props.action) && {
                lineHeight: typography.fontSize
            }, props.disabled && {
                opacity: .5
            }, props.onClick && {
                cursor: 'pointer'
            }, props.disabled && (props.onClick || props.link) && {
                cursor: 'not-allowed !important'
            }),
        }, (props.format || props.toFixed || props.unit || props.toFixed === 0)
            ? core_1.jsx(Formatter_1.default, { format: props.format, unit: props.unit, toFixed: props.toFixed, children: data, fractionColor: props.fractionColor })
            : data);
});
/**
 * PARAGRAPH
 */
exports.P = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography, __assign({ tag: 'p', type: 'paragraph', ref: ref }, props));
});
/**
 * HEADERS
 */
exports.H1 = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography, __assign({ tag: 'h1', type: 'header', size: 1, ref: ref }, props));
});
exports.H2 = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography, __assign({ tag: 'h2', type: 'header', size: 2, ref: ref }, props));
});
exports.H3 = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography, __assign({ tag: 'h3', type: 'header', size: 3, ref: ref }, props));
});
exports.H4 = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography, __assign({ tag: 'h4', type: 'header', size: 4, ref: ref }, props));
});
/**
 * DISPLAYS
 */
exports.D1 = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography, __assign({ tag: 'span', type: 'display', size: 1, ref: ref }, props));
});
exports.D2 = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography, __assign({ tag: 'span', type: 'display', size: 2, ref: ref }, props));
});
exports.D3 = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography, __assign({ tag: 'span', type: 'display', size: 3, ref: ref }, props));
});
exports.D4 = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography, __assign({ tag: 'span', type: 'display', size: 4, ref: ref }, props));
});
/**
 * TEXTS
 */
exports.T1 = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography, __assign({ tag: 'span', type: 'text', size: 1, ref: ref }, props));
});
exports.T2 = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography, __assign({ tag: 'span', type: 'text', size: 2, ref: ref }, props));
});
exports.T3 = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography, __assign({ tag: 'span', type: 'text', size: 3, ref: ref }, props));
});
exports.T4 = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography, __assign({ tag: 'span', type: 'text', size: 4, ref: ref }, props));
});
/**
 * CAPTIONS
 */
exports.C1 = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography, __assign({ tag: 'span', type: 'caption', size: 1, ref: ref }, props));
});
exports.C2 = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography, __assign({ tag: 'span', type: 'caption', size: 2, ref: ref }, props));
});
exports.C3 = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography, __assign({ tag: 'span', type: 'caption', size: 3, ref: ref }, props));
});
exports.C4 = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography, __assign({ tag: 'span', type: 'caption', size: 4, ref: ref }, props));
});
/**
 * OTHER
 */
exports.HR = function (props) {
    var theme = hooks_1.useTheme().theme;
    var gap = props.gap || 3;
    var width = props.width || 1;
    return core_1.jsx("div", { className: props.className, css: core_1.css({
            width: '100%',
            borderBottomWidth: width + "px",
            borderBottomStyle: 'solid',
            borderBottomColor: theme[props.color ? props.color : 'pale'].rgb,
            padding: props.p,
            paddingTop: props.pt,
            paddingLeft: props.pl,
            paddingRight: props.pr,
            paddingBottom: props.pb,
            margin: props.m,
            marginTop: props.mt,
            marginLeft: props.ml,
            marginRight: props.mr,
            marginBottom: props.mb,
        }, props.dotted && {
            border: 'none',
            backgroundImage: "linear-gradient(to right,\n                    " + theme[props.color ? props.color : 'pale'].rgb + " " + width + "px, \n                    " + theme.background.rgba(0) + " " + width + "px \n                )",
            backgroundPosition: 'left bottom',
            backgroundSize: gap + width + "px " + width + "px",
            backgroundRepeat: 'repeat-x',
            height: width + "px"
        }) });
};
