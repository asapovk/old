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
exports.default = (function (displaySideBar) {
    var theme = hooks_1.useTheme().theme;
    var typography = hooks_1.useTypography();
    return {
        sidebar: {
            container: core_1.css({
                position: 'fixed',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                top: 0,
                bottom: 0,
                left: 0,
                width: '15rem',
                boxSizing: 'border-box',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: theme.pale.hex,
                background: 'linear-gradient(270deg, #F2F0F5 0%, #FAF7FC 100%)',
                padding: '2.75rem 0 2.75rem 2.75rem',
                '@media (max-width: 768px)': {
                    position: 'relative',
                    width: '100%',
                    padding: '2.75rem',
                }
            }),
            content: core_1.css({
                zIndex: 3
            }),
            user: {
                container: core_1.css({
                    zIndex: 3,
                    marginBottom: '3.5rem',
                }),
                avatar: core_1.css({
                    display: 'flex',
                    color: theme.textOnAccent.hex,
                    alignItems: 'center',
                    width: '4.5rem',
                    height: '4.5rem',
                    borderRadius: '50%',
                    background: 'linear-gradient(180deg, #A567C2 0%, #6B368F 100%)',
                    "> div": __assign({}, typography.display[2], { width: 'inherit', textAlign: 'center', textTransform: 'uppercase' })
                }),
                name: core_1.css({
                    display: 'block',
                    marginTop: '.75rem',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    paddingRight: '1rem'
                })
            },
            logo: core_1.css({
                paddingTop: '2.5rem',
                height: '3rem',
                marginLeft: '-2.75rem'
            }),
        },
        main: {
            container: core_1.css({
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                boxSizing: 'border-box',
                marginLeft: '15rem',
                padding: '2.75rem 4.5rem',
                '@media (max-width: 768px)': {
                    marginLeft: '0',
                }
            }),
            holder: core_1.css({
                display: 'flex',
                flexBasis: 960,
                flexDirection: 'column',
                '@media (max-width: 768px)': {
                    display: 'block',
                    width: '100%'
                }
            }),
            menu: core_1.css({
                display: 'flex',
                alignItems: 'center',
                height: '4.5rem',
                width: '100%',
            }),
        }
    };
});
