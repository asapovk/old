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
var hooks_1 = require("../../hooks");
var react_1 = require("react");
var Typography = react_1.forwardRef(function (props, ref) {
    var typography = hooks_1.useTypography()[props.type][props.size];
    var spacing = hooks_1.useSpacing(props);
    var theme = hooks_1.useTheme().theme;
    var data = props.children && props.quotes
        ? props.children.toString().replace(/"([^"]*)"/g, '«$1»')
        : props.children;
    return core_1.jsx(props.tag, {
        ref: ref,
        className: props.className,
        style: props.style,
        onClick: props.onClick,
        css: core_1.css(__assign({}, spacing, typography, { display: props.type === 'caption' ? 'inline-block' : 'block', textAlign: props.align }), props.bold && {
            fontWeight: 'bold'
        }, props.ellipsis && {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            minWidth: 0,
        }, props.underline && {
            textDecoration: 'underline'
        }, props.color && {
            color: theme[props.color].hex
        }),
    }, data);
});
exports.default = Typography;
