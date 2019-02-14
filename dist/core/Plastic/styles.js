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
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function (props) {
    var theme = useTheme_1.default().theme;
    var stackCss = {};
    var stackOffset = 5 + (props.stackOffset || 0);
    var stackDirection = props.stackDirection || 'left';
    var stackShadow = '0rem 0.25rem';
    switch (stackDirection) {
        case 'left':
            break;
        case 'right':
            break;
        case 'top':
            stackOffset = 3.25 + (props.stackOffset || 0);
            break;
        case 'bottom':
            stackOffset = 3.25 + (props.stackOffset || 0);
            break;
    }
    if (props.stackPosition) {
        stackCss[stackDirection] = '0rem';
        stackCss.position = 'absolute';
        stackCss.opacity = props.isActive ? 1 : 0.5;
        if (props.isActive) {
            stackCss.zIndex = 2;
        }
    }
    var stackHovers = function () {
        var _a;
        var hovers = {};
        for (var i = 0; (props.stackCount || 0) > i; i++) {
            hovers[":hover > div:nth-of-type(" + (i + 1) + ")"] = (_a = {},
                _a[stackDirection] = i * stackOffset + 'rem',
                _a);
        }
        return hovers;
    };
    return {
        stack: core_1.css(__assign({ position: 'relative', width: '4.75rem', height: '3rem' }, stackHovers())),
        card: core_1.css(__assign({ zIndex: 1, position: 'relative', width: '4.75rem', height: '3rem', borderRadius: '0.25rem', background: props.cardBackground || theme.highlight.hex, cursor: props.isActive ? 'default' : 'pointer', boxShadow: (props.isActive ? stackShadow + " 0.2rem 0rem " : "0, 0, 0, 0 ") + theme.shadow.hex, transition: 'all 0.25s' }, stackCss)),
        pan: core_1.css({
            display: 'block',
            position: 'absolute',
            fontWeight: 600,
            fontSize: '0.85rem',
            color: props.cardColor || theme.textOnAccent.hex,
            width: '100%',
            textAlign: 'right',
            bottom: '0.15rem',
            right: '0.35rem',
        }),
        type: core_1.css({
            display: 'block',
            position: 'absolute',
            top: '0.25rem',
            right: '0.35rem',
            ' polygon': {
                fill: props.cardColor || theme.textOnAccent.hex
            },
            ' path': {
                fill: props.cardColor || theme.textOnAccent.hex
            }
        })
    };
});
