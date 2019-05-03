"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function (props) {
    var _a, _b, _c, _d;
    var theme = useTheme_1.default().theme;
    var MOBILE = "@media (max-width: " + 768 + "px)";
    var DESKTOP = "@media (min-width: " + 769 + "px)";
    return {
        container: core_1.css((_a = {
                userSelect: 'none',
                flexDirection: 'column'
            },
            _a[MOBILE] = core_1.css({
                alignItems: props.alignMobile || 'flex-start',
            }),
            _a)),
        menus: core_1.css((_b = {},
            _b[MOBILE] = core_1.css({
                position: 'absolute',
                left: 0,
                right: 0,
                flexDirection: 'column',
                marginTop: '2rem',
                visibility: 'hidden',
                opacity: 0,
                backgroundColor: theme.interface.hex,
                transform: 'translateY(-1rem)',
                transition: 'all 0.15s ease',
                padding: "1rem 2rem",
                alignItems: props.alignMobile,
                boxShadow: theme.shadows.card.default,
                borderRadius: theme.borders.card.borderRadius,
            }, props.burgerActive && {
                visibility: 'visible',
                opacity: 1,
                transform: 'translateY(0)',
                zIndex: 999,
                boxShadow: theme.shadows.card.active,
            }),
            _b)),
        burgerButton: (_c = {},
            _c[MOBILE] = core_1.css({
                cursor: "pointer",
                width: '1.5rem',
                height: '1rem',
                transition: 'transform 0.15s ease',
                '> *': {
                    width: '1.5rem',
                    height: ' 0.125rem',
                    borderRadius: '0.5rem',
                    transition: 'transform 0.15s ease',
                    backgroundColor: theme.highlight.hex
                },
            }, props.burgerActive && {
                transform: 'translate3d(0, 0px, 0) rotate(45deg)',
                '> :first-of-type': {
                    opacity: 0
                },
                '> :last-of-type': {
                    transform: 'translate3d(0, -7px, 0) rotate(-90deg)'
                },
            }),
            _c),
        burgerTitle: (_d = {},
            _d[MOBILE] = core_1.css({
                cursor: "pointer",
                transition: 'all 0.15s ease',
                opacity: 1,
                transform: "translateX(" + (props.alignMobile === 'flex-end' ? '-' : '') + "1rem)",
                fontSize: '1.5rem',
                fontWeight: 900,
                color: theme.text.hex,
            }, props.burgerActive && {
                transform: 'translateX(0)',
                opacity: 0,
            }, props.alignMobile === 'center' && {
                display: 'none'
            }),
            _d[DESKTOP] = {
                display: 'none'
            },
            _d),
        menu: {
            item: function (props) {
                var _a;
                return core_1.css({
                    userSelect: 'none',
                    ":not(:last-child)": {
                        ":after": (_a = {
                                content: "'\u2022'",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 1rem',
                                fontSize: '1.75rem',
                                color: theme.highlight.rgba(.5)
                            },
                            _a[MOBILE] = {
                                display: 'none',
                            },
                            _a)
                    }
                });
            },
            text: function (props) {
                var _a, _b;
                return core_1.css((_a = {
                        alignItems: 'center',
                        fontSize: '1.375rem',
                        fontWeight: 'normal',
                        textTransform: 'uppercase',
                        color: theme.highlight.hex,
                        cursor: 'pointer',
                        lineHeight: '2.5rem',
                        transition: 'font-size .15s linear',
                        willChange: 'font-size',
                        letterSpacing: '-0.03em'
                    },
                    _a[MOBILE] = {
                        transition: 'none'
                    },
                    _a), props.isActive && (_b = {
                        fontSize: '2.5rem',
                        fontWeight: 900,
                        color: theme.text.hex
                    },
                    _b[MOBILE] = {
                        fontSize: '1.5rem',
                    },
                    _b));
            },
        },
    };
});
