"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function () {
    var theme = useTheme_1.default().theme;
    return {
        groupTitle: core_1.css({
            width: 'fit-content',
            padding: '0.25rem 1rem',
            marginBottom: '0.75rem',
            borderRadius: '1rem',
            backgroundColor: 'rgb(229, 228, 233)',
            boxShadow: '0 1.25rem 2.5rem rgba(0,0,0,.1)'
        }),
        row: core_1.css({
            marginBottom: '1.5rem',
        }),
        moreContainer: core_1.css({
            userSelect: 'none'
        }),
        moreButton: function (minified) { return core_1.css({
            background: theme.interface.rgb,
            borderRadius: '50%',
            padding: '0.75rem',
            boxShadow: '0 0.125rem 0.375rem rgba(0,0,0,.15)',
            "> svg": {
                transition: 'transform .25s ease-out',
                willChange: 'transform',
                transform: "rotate(" + (minified ? 0 : -180) + "deg)"
            }
        }); },
    };
});
