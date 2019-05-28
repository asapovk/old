"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = __importDefault(require("./styles"));
var Spinner_1 = require("../Spinner");
var Button = function (props) {
    var label = props.label, children = props.children, style = props.style, disabled = props.disabled, loading = props.loading, className = props.className;
    var styles = styles_1.default(props);
    var onClick = function (event) {
        if (!disabled && !loading) {
            event.stopPropagation();
            props.onClick && props.onClick();
        }
    };
    return (core_1.jsx("div", { css: styles.button, className: className, style: style, onClick: function (event) { return onClick(event); } },
        core_1.jsx("span", { css: styles.children }, label || children),
        core_1.jsx("div", { css: styles.loading },
            core_1.jsx(Spinner_1.Spinner, { spinning: true, center: true, size: props.size === 'large' ? 'default' : 'small', color: styles.textColor }))));
};
exports.default = Button;
