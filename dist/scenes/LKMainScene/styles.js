"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var hooks_1 = require("../../hooks");
exports.default = (function () {
    var theme = hooks_1.useTheme().theme;
    return {
        sidebar: {
            holder: core_1.css({
                width: '20rem'
            }),
            content: core_1.css({
                top: 0,
                left: 0,
                bottom: 0,
                position: 'fixed',
                zIndex: 2,
                borderRight: '1px solid ' + theme.pale.hex,
                background: theme.interface.hex,
                '@media (max-width: 1023px)': {
                    paddingTop: '4rem',
                },
                '@media (max-width: 768px)': {
                    width: '100%'
                }
            }),
            logo: core_1.css({
                padding: '2.5rem 0',
                height: '3.5rem',
                margin: '0 auto'
            }),
        },
        main: {
            top: core_1.css({
                backgroundColor: theme.background2.hex,
                padding: '2.5rem 0',
                width: '100%',
                '@media (max-width: 768px)': {
                    display: 'none'
                }
            }),
            holder: core_1.css({
                width: '100%',
                position: 'relative',
                maxWidth: '960px',
                '@media (max-width: 768px)': {
                    display: 'none'
                }
            }),
        },
        menu: {
            holder: core_1.css({
                height: '4rem',
                width: '100%'
            }),
            desktop: core_1.css({
                position: 'fixed',
                left: '20rem',
                right: 0,
                top: 0,
                zIndex: 1,
                '@media (max-width: 1023px)': {
                    display: 'none',
                }
            }),
            mobile: core_1.css({
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                zIndex: 1,
                '@media (min-width: 1024px)': {
                    display: 'none'
                }
            }),
        }
    };
});
