"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var hooks_1 = require("../../hooks");
exports.default = (function () {
    var theme = hooks_1.useTheme().theme;
    return {
        wrapper: {
            padding: '1rem',
        },
        title: core_1.css({
            fontSize: '1.125rem',
            textTransform: 'uppercase',
        }),
        subtitle: core_1.css({
            fontSize: '0.75rem',
        }),
        subtitle2: core_1.css({
            fontSize: '0.75rem',
            textAlign: 'right',
        }),
        value1: core_1.css({
            fontWeight: 600,
            fontSize: '1.75rem',
            textTransform: 'uppercase',
        }),
        value2: core_1.css({
            fontSize: '1.125',
            textTransform: 'uppercase',
        }),
        link: core_1.css({
            fontSize: 14,
            textDecoration: 'underline',
            ':hover': {
                cursor: 'pointer',
            }
        }),
        extra: core_1.css({
            margin: '1rem',
            borderTop: "0.5px solid " + theme.pale.hex,
        })
    };
});
