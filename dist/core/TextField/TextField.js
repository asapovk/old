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
var Field_1 = __importDefault(require("./Field"));
exports.default = react_1.forwardRef(function (props, ref) {
    var styles = styles_1.default(props.multiline, props.size, props.disabled, props.decoration);
    var Label = function () { return props.label
        ? core_1.jsx("span", { css: styles.label }, props.label)
        : null; };
    var TextFieldIcon = function (props) {
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
        return (core_1.jsx(__1.Flexbox, { css: styles.container, className: props.className, style: props.style, flexDirection: 'column' },
            core_1.jsx(Label, null),
            core_1.jsx(__1.Flexbox, { css: styles.wrapper, onClick: props.onClick, alignItems: 'center' },
                core_1.jsx(TextFieldIcon, { position: 'left', type: props.leftIcon }),
                core_1.jsx(Field_1.default, __assign({ styles: styles, ref: ref }, props)),
                props.loading
                    ? core_1.jsx(Loading, null)
                    : core_1.jsx(TextFieldIcon, { position: 'right', type: props.rightIcon }))));
    return core_1.jsx(Field_1.default, __assign({ styles: styles, ref: ref }, props));
});
