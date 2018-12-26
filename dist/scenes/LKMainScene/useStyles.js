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
        side: core_1.css({
            width: 320,
            borderRightWidth: 1,
            borderRightStyle: "solid",
            borderRightColor: theme.pale.hex,
            '@media (max-width: 1023px)': {
                paddingTop: 64,
            },
            '@media (max-width: 768px)': {
                width: '100%'
            }
        }),
        $sideScroll: {
            padding: 20
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
