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
var Typography_1 = __importDefault(require("./Typography"));
/**
 * HEADERS
 */
exports.H1 = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography_1.default, __assign({ tag: 'h1', type: 'header', size: 1, ref: ref }, props));
});
exports.H2 = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography_1.default, __assign({ tag: 'h2', type: 'header', size: 2, ref: ref }, props));
});
exports.H3 = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography_1.default, __assign({ tag: 'h3', type: 'header', size: 3, ref: ref }, props));
});
exports.H4 = react_1.forwardRef(function (props, ref) {
    return core_1.jsx(Typography_1.default, __assign({ tag: 'h4', type: 'header', size: 4, ref: ref }, props));
});
