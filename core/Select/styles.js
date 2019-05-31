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
exports.default = (function (opt) {
    var theme = useTheme_1.default().theme;
    return {
        root: core_1.css({
            position: 'relative',
            flex: 1
        }),
        input: core_1.css(__assign({ zIndex: 10 }, (opt.open && {
            '> div': {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0
            }
        }))),
        dropMenu: core_1.css(__assign({ position: 'absolute', width: '100%', height: '10rem', zIndex: 55, padding: 0, paddingTop: '1px', marginTop: '-1px' }, (opt.open && {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
        }))),
        dropItem: core_1.css({
            cursor: 'pointer',
            padding: '0.5rem 0.75rem',
            height: 'fit-content',
            ':hover': {
                background: theme.background.hex
            }
        })
    };
});
