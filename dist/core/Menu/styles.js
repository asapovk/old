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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var hooks_1 = require("../../hooks");
exports.default = (function (forElka) {
    var theme = hooks_1.useTheme().theme;
    var typography = hooks_1.useTypography();
    return {
        menu: {
            container: core_1.css({
                width: '100%',
            }),
            holder: core_1.css({
                backgroundColor: theme.interface.hex,
                height: 'calc(4rem - 1px)',
                userSelect: 'none',
                alignItems: 'center',
                borderBottom: '1px solid ' + theme.pale.rgb,
                padding: '0 2.5rem',
                justifyContent: 'space-between'
            }, forElka && {
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderBottom: 'none',
                padding: 0
            }),
            header: core_1.css({
                cursor: 'pointer',
                marginRight: '2.5rem',
                flexShrink: 0
            }),
            title: core_1.css(__assign({}, typography.display[2])),
            toolbar: core_1.css({
                marginLeft: '1.5rem',
                '> *': {
                    marginLeft: '1rem'
                }
            })
        },
        navbar: {
            holder: core_1.css({
                alignItems: 'center',
                flex: '1 1 0',
                overflow: 'hidden',
                justifyContent: 'center',
            }, forElka && {
                justifyContent: 'flex-start'
            }),
            item: function (active, visible) { return core_1.css(__assign({}, typography.caption[1], { padding: '0.375rem 1.5rem', cursor: 'pointer', fontWeight: 500, flexShrink: 0, color: active ? theme.textOnAccent.rgb : theme.text.rgb, background: active ? theme.highlight.rgb : 'transparent', borderRadius: theme.radius.button, display: visible ? 'block' : 'none' })); },
            dropdown: core_1.css({
                boxSizing: 'border-box',
                padding: '1rem',
                display: 'none',
                position: 'absolute',
                right: 0,
                top: '2rem',
                boxShadow: '0px 0.5rem 0.5rem 0px rgba(0, 0, 0, 0.2)',
                zIndex: 1,
                backgroundColor: theme.background.hex,
                borderRadius: theme.radius.default
            }),
            mobile: function (active) { return core_1.css({
                overflow: 'hidden',
                transform: 'scaleY(0)',
                transformOrigin: 'top',
                transition: 'transform 0.15s ease',
                position: 'absolute',
                top: '4rem',
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 11,
                boxShadow: '0 1rem 1rem 0 rgba(0,0,0,0.2)',
                background: theme.background2.hex,
                height: 'fit-content',
                padding: '1rem'
            }, active && {
                transform: 'scaleY(1)'
            }); }
        },
        mobile: {
            hamburger: function (active) { return core_1.css({
                width: '1.5rem',
                height: '1rem',
                cursor: 'pointer',
                transition: 'transform 0.15s ease',
                marginRight: '1.25rem',
                '> *': {
                    width: '1.5rem',
                    height: ' 0.125rem',
                    borderRadius: '0.5rem',
                    transition: 'transform 0.15s ease',
                    backgroundColor: theme.highlight.hex
                },
            }, active && {
                transform: 'translate3d(0, 0px, 0) rotate(45deg)',
                '> :first-of-type': {
                    opacity: 0
                },
                '> :last-of-type': {
                    transform: 'translate3d(0, -7px, 0) rotate(-90deg)'
                },
            }); },
        }
    };
});
