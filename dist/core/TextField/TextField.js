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
var styles_1 = __importDefault(require("./styles"));
var react_1 = require("react");
var __1 = require("..");
/*———————————————————————
* WRAPPER
———————————————————————*/
exports.default = react_1.forwardRef(function (props, ref) {
    var styles = styles_1.default(props.multiline, props.size, props.disabled, props.decoration);
    var Label = function () { return props.label
        ? core_1.jsx("span", { css: styles.label }, props.label)
        : null; };
    var IconOrNot = function (props) {
        return props.type
            ? core_1.jsx(__1.Icon, { css: styles.icon(props.position), type: props.type })
            : null;
    };
    var Loading = function () {
        return core_1.jsx(__1.Flexbox, { alignItems: 'center', justifyContent: 'center', css: styles.icon },
            core_1.jsx(__1.Spin, null,
                core_1.jsx(__1.Icon, { type: 'spin' })));
    };
    if (!(props.decoration === 'none'))
        return (core_1.jsx(__1.Flexbox, { css: styles.container, style: props.style, flexDirection: 'column' },
            core_1.jsx(Label, null),
            core_1.jsx(__1.Flexbox, { css: styles.wrapper, onClick: props.onClick, alignItems: 'center' },
                core_1.jsx(IconOrNot, { position: 'left', type: props.leftIcon }),
                core_1.jsx(Field, __assign({ styles: styles, ref: ref }, props)),
                props.loading
                    ? core_1.jsx(Loading, null)
                    : core_1.jsx(IconOrNot, { position: 'right', type: props.rightIcon }))));
    else
        return core_1.jsx(Field, __assign({ styles: styles, ref: ref }, props));
});
/*———————————————————————
* FIELD
———————————————————————*/
var Field = react_1.forwardRef(function (props, ref) {
    var _a = react_1.useState(props.value), value = _a[0], setValue = _a[1];
    function onChange(event) {
        setValue(event.target.value);
        props.onChange && props.onChange(event);
    }
    return core_1.jsx(props.multiline ? 'textarea' : 'input', __assign({ onFocus: props.onFocus, onBlur: props.onBlur, defaultValue: props.defaultValue, value: value, onChange: onChange, disabled: props.disabled, placeholder: props.placeholder, css: props.styles.field, ref: ref, type: props.type }, props.multiline
        ? props.singlerow && {
            onKeyDown: function (event) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                }
            }
        }
        : { type: props.type }));
});
