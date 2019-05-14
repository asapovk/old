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
    var _a = react_1.useState(''), value = _a[0], setValue = _a[1];
    var _b = react_1.useState(false), focused = _b[0], setFocused = _b[1];
    react_1.useLayoutEffect(function () {
        var value = props.value || props.defaultValue || '';
        if (props.type === 'rubles' || props.type === 'counter') {
            var digits = props.type == 'rubles' ? 2 : 3;
            value = parseFloat(value || '0').toFixed(digits);
        }
        setValue(value);
    }, []);
    var valueValidation = function (value) {
        switch (props.type) {
            case 'rubles': {
                value = value.replace(/[\,]/g, '.');
                if (value == '.') {
                    value = '0.';
                }
                var regex = /^$|^0$|^0{1}\.([0-9]{1,2})?$|^[1-9][0-9]*\.?([0-9]{1,2})?$/g;
                return new RegExp(regex).test(value)
                    ? value
                    : false;
            }
            case 'counter': {
                value = value.replace(/[\,]/g, '.');
                if (value == '.') {
                    value = '0.';
                }
                var regex = /^$|^0$|^0{1}\.([0-9]{1,2})?$|^[1-9][0-9]*\.?([0-9]{1,3})?$/g;
                return new RegExp(regex).test(value)
                    ? value
                    : false;
            }
        }
        return value;
    };
    var onChange = function (e, newValue) {
        newValue = valueValidation(newValue);
        if ((typeof (newValue) === 'boolean' && !newValue) || newValue == value)
            return;
        setValue(newValue);
        props.onChange && props.onChange(e, newValue);
    };
    var onBlur = function (e, newValue) {
        if (props.type == 'rubles' || props.type == 'counter') {
            var digits = props.type == 'rubles' ? 2 : 3;
            newValue = parseFloat(newValue || '0').toFixed(digits);
            setValue(newValue);
            if (value !== newValue) {
                props.onChange && props.onChange(e, newValue);
            }
        }
        setFocused(false);
        props.onBlur && props.onBlur(e, newValue);
    };
    var styles = styles_1.default({
        multiline: props.multiline,
        size: props.size,
        disabled: props.disabled || props.loading,
        decoration: props.decoration,
        floatingLabel: props.floatingLabel,
        leftIcon: props.leftIcon
    });
    var RightGlyph = function () {
        if (props.rightLabel) {
            return core_1.jsx("span", { css: styles.rightLabel, children: props.rightLabel });
        }
        if (props.rightIcon) {
            return core_1.jsx(__1.Icon, { css: styles.icon('right'), type: props.rightIcon });
        }
        return null;
    };
    return (core_1.jsx(__1.Flexbox, { css: styles.container, className: props.className, style: props.style, flexDirection: 'column' },
        props.label && (core_1.jsx("span", { css: styles.label, children: props.label })),
        core_1.jsx(__1.Flexbox, { css: styles.wrapper, alignItems: 'center', onClick: props.onClick, onMouseDown: props.onMouseDown, onMouseUp: props.onMouseUp, children: (core_1.jsx(react_1.Fragment, null,
                (props.floatingLabel && (props.size && props.size !== 'small')) && (core_1.jsx("label", { css: styles.floatingLabel(focused || !!value), children: props.floatingLabel })),
                props.leftIcon && core_1.jsx(__1.Icon, { css: styles.icon('left'), type: props.leftIcon }),
                core_1.jsx(Field_1.default, { styles: styles, ref: ref, multiline: props.multiline, mask: props.mask, onFocus: function (event) {
                        setFocused(true);
                        props.onFocus && props.onFocus(event);
                    }, onBlur: onBlur, onChange: onChange, onClick: function (e) {
                        !focused && setFocused(true);
                        props.onClick && props.onClick(e);
                    }, onEnter: props.onEnter, disabled: props.disabled, loading: props.loading, placeholder: props.floatingLabel ? '' : props.placeholder, type: props.type, singlerow: props.singlerow, value: value, tabIndex: props.tabIndex }),
                props.loading
                    ? core_1.jsx(__1.Spin, null,
                        core_1.jsx(__1.Icon, { css: styles.icon(), type: 'spin' }))
                    : core_1.jsx(RightGlyph, null))) })));
});
