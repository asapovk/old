"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = __importDefault(require("./styles"));
exports.default = (function (props) {
    var children = props.children, style = props.style, className = props.className;
    var styles = styles_1.default();
    return (core_1.jsx("span", { css: styles.container, className: className, style: style, children: children }));
});
