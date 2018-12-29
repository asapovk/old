"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
var useTypography_1 = __importDefault(require("../../hooks/useTypography"));
exports.default = (function () {
    var theme = useTheme_1.default().theme;
    var typography = useTypography_1.default();
    return {
        root: core_1.css({
            height: "100%",
        }),
        preside: core_1.css({
            width: "350px",
            zIndex: 20000,
            borderRightWidth: 1,
            borderRightStyle: "solid",
            borderRightColor: theme.pale.hex,
        }),
        side: core_1.css({
            padding: 20,
            width: 320,
            '@media (max-width: 1023px)': {
                paddingTop: 64,
            },
            '@media (max-width: 768px)': {
                width: '100%'
            }
        }),
        $sideScroll: {
            position: "fixed",
            width: "400px",
            top: 0,
            left: 0,
        },
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
