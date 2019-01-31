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
var react_1 = require("react");
exports.default = react_1.forwardRef(function (props, ref) {
    function onChange(event) {
        props.onChange && props.onChange(event);
    }
    return core_1.jsx(props.multiline ? 'textarea' : 'input', __assign({ onFocus: props.onFocus, onBlur: props.onBlur, defaultValue: props.defaultValue, value: props.value, onChange: onChange, disabled: props.disabled, placeholder: props.placeholder, css: props.styles.field, ref: ref, type: props.type }, props.multiline
        ? props.singlerow && {
            onKeyDown: function (event) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                }
            }
        }
        : { type: props.type }));
});
