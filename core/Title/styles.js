"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function (state) {
    var theme = useTheme_1.default().theme;
    return {
        root: core_1.css({
            position: 'relative',
            fontWeight: 900,
            fontSize: '2rem',
            userSelect: 'none',
            lineHeight: 1,
            textTransform: 'uppercase',
            color: theme.text.hex,
        }),
        switchWrap: core_1.css({
            margin: '0 0.5rem',
        }),
        switch: core_1.css({
            cursor: 'pointer',
            position: 'relative',
            boxSizing: 'border-box',
            border: '2px solid',
            height: '2rem',
            width: '4rem',
            borderRadius: '2rem',
            margin: '0 0.5rem',
            '> span': {
                transition: 'all 0.3s cubic-bezier(0.19, 1, 0.22, 1)',
                position: 'absolute',
                top: '0.25rem',
                left: state ? '0.25rem' : '2.35rem',
                display: 'inline-block',
                width: '1.25rem',
                height: '1.25rem',
                borderRadius: '0.75rem',
                background: theme.highlight.hex,
            }
        }),
        switchTitle: function (active) { return core_1.css({
            color: theme.highlight.hex,
            opacity: active ? 1 : 0.3
        }); }
    };
});
