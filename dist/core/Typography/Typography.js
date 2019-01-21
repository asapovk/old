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
var hooks_1 = require("../../hooks");
var react_1 = require("react");
var __1 = require("..");
var Typography = react_1.forwardRef(function (props, ref) {
    var typography = hooks_1.useTypography()[props.type][props.size];
    var theme = hooks_1.useTheme().theme;
    var Text = core_1.jsx(props.tag, {
        ref: ref,
        className: props.className,
        onClick: props.onClick,
        css: core_1.css(__assign({}, typography), props.bold && {
            fontWeight: 'bold'
        }, props.link && {
            color: theme.highlight.rgb
        })
    }, props.children);
    if (props.underline || props.action) {
        return (core_1.jsx(__1.Flexbox, { flexDirection: 'column' },
            props.action
                ? core_1.jsx(__1.Flexbox, { alignItems: 'center', justifyContent: 'space-between' },
                    Text,
                    core_1.jsx("div", null, props.action))
                : Text,
            core_1.jsx("div", { css: core_1.css({
                    marginTop: typography.marginBottom ? '-' + typography.marginBottom : 'none',
                    paddingTop: '0.625rem',
                    width: '100%',
                    borderBottom: '0.5px solid ' + theme.pale.rgb
                }) })));
    }
    else
        return Text;
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
 * CAPRTIONS
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
