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
exports.default = (function (props) {
    var onClick = props.onClick, value = props.value, children = props.children, style = props.style, loading = props.loading, color = props.color, top = props.top, right = props.right, left = props.left;
    var styles = useStyles_1.default(color, top, right, left);
    return (core_1.jsx("div", { css: __assign({}, styles.container, style), onClick: onClick },
        core_1.jsx("div", { css: styles.main }, value),
        children));
});
