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
var react_input_mask_1 = __importDefault(require("react-input-mask"));
exports.default = react_1.forwardRef(function (props, ref) {
    function onKeyPress(event) {
        if (event.key === 'Enter') {
            props.onEnter && props.onEnter(event);
        }
    }
    function _formatReturnValue(e, type, callback) {
        var value = e.currentTarget.value || '';
        callback(e, value);
    }
    function onBlur(event) {
        props.onBlur && props.onBlur(event);
    }
    if (props.mask) {
        return core_1.jsx(react_input_mask_1.default, {
            mask: props.mask,
            onFocus: props.onFocus,
            onBlur: onBlur,
            // defaultValue: props.defaultValue,
            value: props.value,
            onChange: props.onChange,
            onKeyPress: onKeyPress,
            disabled: props.disabled || props.loading,
            placeholder: props.placeholder,
            css: props.styles.field,
            ref: ref,
            type: props.type,
            tabIndex: props.tabIndex
        });
    }
    return (core_1.jsx(props.multiline
        ? 'textarea'
        : 'input', __assign({ onFocus: function (e) { return props.onFocus && props.onFocus(e); }, onBlur: onBlur, 
        // defaultValue: props.defaultValue,
        value: props.value, onChange: function (e) { return props.onChange && props.onChange(e, e.currentTarget.value); }, onKeyPress: onKeyPress, disabled: props.disabled || props.loading, placeholder: props.placeholder, css: props.styles.field(props.multiline), ref: ref, type: props.type, tabIndex: props.tabIndex }, props.multiline
        ? props.singlerow && {
            onKeyDown: function (event) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                }
            }
        }
        : { type: props.type })));
});
