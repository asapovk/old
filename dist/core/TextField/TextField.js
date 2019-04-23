"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var __1 = require("..");
var Field_1 = __importDefault(require("./Field"));
var styles_1 = __importDefault(require("./styles"));
exports.default = react_1.forwardRef(function (props, ref) {
    var _a = react_1.useState(props.value || props.defaultValue || ''), value = _a[0], setValue = _a[1];
    var _b = react_1.useState(false), focused = _b[0], setFocused = _b[1];
    var onChange = function (e, newValue) {
        if (newValue == value) {
            return;
        }
        setValue(newValue);
        props.onChange && props.onChange(e, newValue);
    };
    var styles = styles_1.default({
        multiline: props.multiline,
        size: props.size,
        disabled: props.disabled || props.loading,
        decoration: props.decoration,
        floatingLabel: props.floatingLabel,
        leftIcon: props.leftIcon
    });
    return (core_1.jsx(__1.Flexbox, { css: styles.container, className: props.className, style: props.style, flexDirection: 'column' },
        props.label && (core_1.jsx("span", { css: styles.label, children: props.label })),
        core_1.jsx(__1.Flexbox, { css: styles.wrapper, onClick: props.onClick, alignItems: 'center' },
            (props.floatingLabel && (props.size && props.size !== 'small')) && (core_1.jsx("label", { css: styles.floatingLabel(focused || !!value), children: props.floatingLabel })),
            props.leftIcon && core_1.jsx(__1.Icon, { css: styles.icon('left'), type: props.leftIcon }),
            core_1.jsx(Field_1.default, { styles: styles, ref: ref, multiline: props.multiline, mask: props.mask, onFocus: function (event) {
                    setFocused(true);
                    props.onFocus && props.onFocus(event);
                }, onBlur: function (event) {
                    setFocused(false);
                    props.onBlur && props.onBlur(event);
                }, onChange: onChange, onClick: function (e) {
                    props.onClick && props.onClick(e);
                }, onEnter: props.onEnter, disabled: props.disabled, loading: props.loading, placeholder: props.floatingLabel ? '' : props.placeholder, type: props.type, singlerow: props.singlerow, value: value, tabIndex: props.tabIndex }),
            props.loading
                ? core_1.jsx(__1.Spin, null,
                    core_1.jsx(__1.Icon, { css: styles.icon(), type: 'spin' }))
                : props.rightIcon && core_1.jsx(__1.Icon, { css: styles.icon('right'), type: props.rightIcon }))));
});
