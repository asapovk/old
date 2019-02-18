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
var Login_1 = __importDefault(require("./Login"));
var Story_1 = __importDefault(require("./Story"));
exports.default = (function (props) {
    return (core_1.jsx(__1.Flexbox, { css: core_1.css({ minHeight: '100%' }) },
        core_1.jsx(Login_1.default, __assign({}, props)),
        core_1.jsx(Story_1.default, __assign({}, props))));
});
