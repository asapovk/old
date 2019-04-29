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
exports.default = (function () {
    var _a;
    var theme = hooks_1.useTheme().theme;
    var typography = hooks_1.useTypography();
    var breakpoints = [414, 768, 1024];
    var mq = breakpoints.map(function (bp) { return "@media (max-width: " + bp + "px)"; });
    return {
        theme: theme,
        container: function (isMobile, showSideBar) { return isMobile && core_1.css({
            minHeight: '100%',
            overflow: 'hidden',
        }, showSideBar && {
            overflow: 'visible'
        }); },
        mask: function (display) { return core_1.css({
            background: 'rgba(0,0,0,.3)',
            position: 'fixed',
            zIndex: 3,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            opacity: 1,
            transition: 'all .25s ease-out',
            visibility: 'visible',
        }, !display && {
            visibility: 'hidden',
            opacity: 0,
        }); },
        main: {
            container: function (isMobile) {
                var _a;
                return core_1.css((_a = {
                        // marginLeft: '15rem',
                        display: 'flex',
                        flex: 1,
                        justifyContent: 'center',
                        boxSizing: 'border-box',
                        padding: '2.75rem 4.5rem',
                        overflow: 'hidden'
                    },
                    _a[mq[1]] = {
                        padding: '2.5rem',
                        // position: displaySidebar ? 'fixed' : 'relative'
                        position: 'relative',
                    },
                    _a[mq[0]] = {
                        padding: '1.25rem',
                    },
                    _a), isMobile && {
                    margin: 0,
                });
            },
            holder: core_1.css((_a = {
                    display: 'flex',
                    flex: '1 1 960px',
                    maxWidth: '960px',
                    minWidth: 0,
                    flexDirection: 'column'
                },
                _a[mq[1]] = {
                    display: 'block',
                    width: '100%'
                },
                _a)),
            menu: core_1.css({
                display: 'flex',
                alignItems: 'center',
                height: '4.5rem',
                width: '100%',
                marginBottom: '2.75rem',
            }),
            back: function (needDisplay) { return core_1.css({
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                width: 0,
                margin: 0,
                padding: 0,
                border: 'none',
                transition: 'all .2s ease-out',
                opacity: 0,
                transform: 'translateX(-40px)'
            }, needDisplay && {
                transform: 'translateX(0px)',
                opacity: 1,
                width: '6.25rem',
                paddingRight: '1rem',
                marginRight: '1rem',
                borderRight: '1px solid ' + theme.pale.rgb,
            }); },
        },
        sidebar: {
            container: function (isMobile, display) { return core_1.css({
                position: 'sticky',
                top: 0,
                left: 0,
                minHeight: '100%',
                zIndex: 4,
                display: 'flex',
                flexDirection: 'column',
                width: '15rem',
                boxSizing: 'border-box',
                padding: '2.75rem 0 2.75rem 2.75rem',
                justifyContent: 'space-between',
                /*
                *  Chrome scroll lag repair
                */
                WebkitBackfaceVisibility: 'hidden',
                WebkitTransform: 'translateZ(0)',
            }, isMobile && {
                position: 'absolute',
                transition: 'transform .25s ease-out',
                willChange: 'transform',
                transform: 'translateX(-20rem)'
            }, display && {
                transform: 'translateX(0)'
            }); },
            background: core_1.css({
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                width: '15rem',
                borderRightWidth: '1px',
                borderRightStyle: 'solid',
                borderRightColor: theme.pale.hex,
                background: 'linear-gradient(270deg, #F2F0F5 0%, #FAF7FC 100%)',
                zIndex: 3
            }),
            user: {
                container: core_1.css({
                    position: 'absolute',
                    zIndex: 4
                }),
                avatar: {
                    container: core_1.css({
                        width: '4.5rem',
                        height: '4.5rem',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        cursor: 'pointer'
                    }),
                    picture: function (image) { return core_1.css({
                        display: 'flex',
                        flex: 1,
                        background: "url(" + image + ") no-repeat center center",
                        backgroundSize: 'cover',
                    }); },
                    shortname: core_1.css({
                        display: 'flex',
                        flex: 1,
                        color: '#FFFFFF',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(180deg, #A567C2 0%, #6B368F 100%)',
                        "> div": __assign({}, typography.display[2], { width: 'inherit', textAlign: 'center', textTransform: 'uppercase' })
                    }),
                    hover: core_1.css({
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        background: 'black',
                        opacity: .8,
                        color: 'white',
                        fontSize: '2rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }),
                    input: core_1.css({
                        opacity: 0,
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                        fontSize: '1000px !important',
                        height: '300px',
                        cursor: 'inherit',
                        zIndex: 5
                    })
                },
                name: core_1.css({
                    display: 'block',
                    marginTop: '.75rem',
                    paddingRight: '1rem'
                })
            },
            content: core_1.css({
                zIndex: 4,
                marginTop: '11.25rem'
            }),
            logo: core_1.css({
                paddingTop: '3.5rem',
                width: '8rem',
                marginLeft: '.75rem',
                zIndex: 4
            }),
        },
    };
});
