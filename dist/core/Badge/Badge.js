"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("..");
var styles_1 = __importDefault(require("./styles"));
exports.default = (function (props) {
    var onClick = props.onClick, value = props.value, children = props.children, style = props.style, loading = props.loading, color = props.color, top = props.top, right = props.right, left = props.left, className = props.className;
    var styles = styles_1.default(color, top, right, left);
    return (core_1.jsx("div", { css: styles.container, style: style, onClick: onClick, className: className },
        core_1.jsx("div", { css: styles.main, children: !loading ? core_1.jsx(__1.Spin, { children: core_1.jsx(__1.Icon, { type: "sync" }) }) : value }),
        children));
});
