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
exports.default = (function (clickable, decoration) {
    var theme = useTheme_1.default().theme;
    return {
        container: core_1.css(__assign({ position: "relative", boxSizing: "border-box", lineHeight: 1, minWidth: "15rem", overflow: "hidden", background: theme.interface.rgb, transition: "all .2s ease", userSelect: "none", boxShadow: theme.shadows.widget }, theme.borders.widget), decoration && __assign({}, getDecorations(decoration))),
        title: core_1.css({
            paddingRight: "1rem",
            fontSize: "1.125rem",
            textTransform: "uppercase"
        }),
        loading: core_1.css({
            fontSize: "1.5rem",
            fontWeight: 500,
            textAlign: "center",
            "> svg": {
                color: theme.highlight.hex
            }
        }),
        loadingText: core_1.css({
            fontSize: "1rem",
            paddingTop: "0.75rem",
            color: theme.lowlight.hex
        }),
        icon: core_1.css({
            color: theme.highlight.hex
        })
    };
});
var getDecorations = function (decoration) {
    var theme = useTheme_1.default().theme;
    switch (decoration) {
        case 'border-bottom':
            return {
                borderWidth: "0 0 " + theme.borders.widget.borderWidth + " 0",
                borderRadius: '0',
            };
        case 'borderless':
            return {
                border: 'none'
            };
        case 'none':
        default:
            return {
                padding: 0
            };
    }
};
