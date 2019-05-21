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
exports.default = (function () {
    var theme = useTheme_1.default().theme;
    return {
        root: core_1.css({
            position: 'fixed',
            right: 0,
            top: 0,
            zIndex: 100,
            float: 'right'
        }),
        item: core_1.css(__assign({ width: 300, margin: '0.75rem', marginBottom: 0, padding: '1rem', background: theme.interface.hex, color: theme.text.hex }, theme.borders.card, { boxShadow: theme.shadows.card.default })),
        title: core_1.css({
            fontWeight: 600,
            fontSize: '1.125rem',
            paddingBottom: '0.25rem',
        }),
        text: core_1.css({
            fontSize: '0.75rem',
        })
    };
});
