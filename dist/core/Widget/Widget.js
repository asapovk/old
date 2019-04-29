"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../../");
var styles_1 = __importDefault(require("./styles"));
exports.default = (function (props) {
    var title = props.title, loading = props.loading, onClick = props.onClick, className = props.className, style = props.style, children = props.children, decoration = props.decoration;
    var styles = styles_1.default(typeof onClick === 'function', decoration);
    return (core_1.jsx("div", { css: styles.container, className: className, style: style, onClick: onClick },
        title && (core_1.jsx("div", { css: styles.title }, title)),
        loading ? (core_1.jsx("div", { css: styles.loading },
            core_1.jsx(__1.Spin, null,
                core_1.jsx(__1.Icon, { type: "sync", css: styles.icon })),
            typeof loading === "string" && (core_1.jsx("div", { css: styles.loadingText }, loading)))) : children));
});
