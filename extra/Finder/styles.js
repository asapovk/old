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
        root: core_1.css(__assign({ lineHeight: 1, color: theme.text.rgb, backgroundColor: theme.background.rgb }, theme.borders.textfield)),
        menu: core_1.css({
            marginLeft: '-0.5px',
            minWidth: 200,
        }),
        items: core_1.css({
            padding: '0.75rem',
            maxHeight: '40rem',
            overflow: 'auto',
            '> *': {
                flexShrink: 0,
            }
        }),
        filter: core_1.css({
            padding: '0.75rem',
            borderBottom: '1px solid',
            borderColor: theme.borders.textfield.borderColor,
        }),
        section: core_1.css({}),
        navItem: function (active) { return core_1.css({}); },
        badge: core_1.css({}),
    };
});
