"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var hooks_1 = require("../../hooks");
exports.default = (function (displaySideBar) {
    var theme = hooks_1.useTheme().theme;
    return {
        sidebar: {
            holder: core_1.css({
                width: '20rem',
                zIndex: 3,
                position: 'sticky',
                top: 0,
                alignSelf: 'flex-start',
                flexDirection: 'column',
                '@media (max-width: 768px)': {
                    position: 'relative',
                    width: '100%'
                }
            }),
            content: core_1.css({
                width: '20rem',
                zIndex: 3,
                flexDirection: 'column',
                '@media (max-width: 768px)': {
                    width: '100%'
                }
            }),
            background: core_1.css({
                top: 0,
                left: 0,
                bottom: 0,
                position: 'fixed',
                zIndex: 2,
                width: '20rem',
                borderRight: '1px solid ' + theme.pale.hex,
                background: theme.interface.hex,
                '@media (max-width: 768px)': {
                    display: 'none'
                },
            }),
            logo: {
                container: core_1.css({
                    width: '20rem',
                    height: '8.5rem',
                }),
                holder: core_1.css({
                    position: 'fixed',
                    width: '20rem',
                    zIndex: 4,
                    alignItems: 'center',
                    flexDirection: 'column',
                    background: theme.interface.hex
                }),
                wrapper: core_1.css({
                    padding: '2.5rem 0',
                    height: '3.5rem',
                    width: '12rem',
                    justifyContent: 'center',
                })
            }
        },
        main: {
            container: core_1.css({
                position: 'sticky',
                top: 0,
                alignSelf: 'flex-start',
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1,
                '@media (max-width: 768px)': {
                    display: 'none'
                },
            }),
            top: core_1.css({
                backgroundColor: theme.background2.hex,
                padding: '2.5rem 0',
                width: '100%',
                justifyContent: 'center',
            }),
            holder: core_1.css({
                width: '100%',
                maxWidth: '960px',
                margin: '0 2rem',
            }),
        },
        menu: {
            container: core_1.css({
                height: '4rem',
                width: '100%'
            }),
            holder: core_1.css({
                position: 'fixed',
                left: displaySideBar
                    ? '20rem'
                    : 0,
                right: 0,
                top: 0,
                zIndex: 1,
                '@media (max-width: 1023px)': {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    zIndex: 1,
                }
            }),
        }
    };
});
