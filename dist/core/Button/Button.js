"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var useStyles_1 = __importDefault(require("./useStyles"));
var index_1 = require("../index");
exports.default = (function (props) {
    var labelCase = props.labelCase, label = props.label, children = props.children, style = props.style, loading = props.loading, decoration = props.decoration, disabled = props.disabled, size = props.size, inversion = props.inversion, className = props.className, thin = props.thin;
    var styles = useStyles_1.default(size, loading, disabled, labelCase, decoration, inversion, thin);
    var onClick = function (event) {
        if (!props.disabled && !props.loading) {
            event.stopPropagation();
            props.onClick && props.onClick();
        }
    };
    return (core_1.jsx("button", { css: styles, className: className, style: style, onClick: function (event) { return onClick(event); } },
        core_1.jsx("span", null, label || children),
        loading && (core_1.jsx(index_1.Spin, null,
            core_1.jsx(index_1.Icon, { type: "sync" })))));
});
