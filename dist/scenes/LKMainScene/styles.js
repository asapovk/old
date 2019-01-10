"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var hooks_1 = require("../../hooks");
exports.default = (function () {
    var theme = hooks_1.useTheme().theme;
    return {
        root: core_1.css({
            height: "100%",
        }),
        sidebarHolder: core_1.css({
            width: "20rem",
            borderRightWidth: 1,
            borderRightStyle: "solid",
            borderRightColor: theme.pale.hex,
        }),
        sidebar: core_1.css({
            top: 0,
            left: 0,
            bottom: 0,
            width: "20rem",
            position: "fixed",
            overflow: 'hidden',
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
        main: core_1.css({
            flex: 1,
            height: "100%",
            position: "relative",
            '@media (max-width: 768px)': {
                display: 'none'
            }
        }),
        menuMobile: core_1.css({
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            zIndex: 1,
            '@media (min-width: 1024px)': {
                display: 'none'
            }
        }),
        menuDesktop: core_1.css({
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            zIndex: 1,
            '@media (max-width: 1023px)': {
                display: 'none',
            }
        }),
        $mainScroll: {
            paddingTop: 64
        }
    };
});
