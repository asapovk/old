"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var hooks_1 = require("../../hooks");
exports.default = (function () {
    var _a, _b, _c, _d;
    var theme = hooks_1.useTheme().theme;
    var breakpoints = [414, 960];
    var mq = breakpoints.map(function (bp) { return "@media (max-width: " + bp + "px)"; });
    return {
        container: core_1.css((_a = {
            minHeight: '100%'
        },
            _a[mq[1]] = {
                flexDirection: 'column'
            },
            _a)),
        form: {
            container: core_1.css((_b = {
                flexBasis: '32rem',
                flexShrink: 0,
                justifyContent: 'center',
                height: 'fit-content',
                minHeight: '100vh',
                position: 'sticky',
                bottom: 0,
                alignSelf: 'flex-end'
            },
                _b[mq[1]] = {
                    flexBasis: 'auto',
                    alignSelf: 'auto',
                    minHeight: 'auto',
                },
                _b)),
            welcome: core_1.css((_c = {
                width: '100%',
                maxWidth: '25rem',
                padding: '4rem 4rem 2rem 4rem'
            },
                _c[mq[1]] = {
                    padding: '4rem',
                },
                _c[mq[0]] = {
                    padding: '2.5rem 1.25rem',
                },
                _c)),
            logo: core_1.css((_d = {
                maxHeight: '3.5rem',
<<<<<<< HEAD
                maxWidth: '12rem',
                marginBottom: '4rem'
=======
                    maxWidth: '12rem'
>>>>>>> 0a8b9a59afb000c2219764df98a1b792d689da7c
            },
                _d[mq[1]] = {
                    alignSelf: 'center',
                },
                _d)),
<<<<<<< HEAD
=======
            title: core_1.css({
                color: context.titleColor,
                marginTop: '4rem',
                marginBottom: '2rem'
            }),
>>>>>>> 0a8b9a59afb000c2219764df98a1b792d689da7c
            actions: {
                container: core_1.css({
                    paddingTop: '2.5rem',
                    flex: 1,
                    alignItems: 'flex-end'
                }),
                wrapper: core_1.css({
                    height: 'fit-content',
                    width: '100%',
                    '> div:not(:last-child)': {
                        marginRight: '1.25rem',
                    }
                }),
                item: core_1.css({
                    padding: '1.5rem 0.5rem',
                    border: '1px solid ' + theme.pale.rgb,
                    borderRadius: theme.radius.card,
                    cursor: 'pointer'
                }),
                icon: core_1.css({
                    marginBottom: '1.5rem',
                    fontSize: '2rem',
<<<<<<< HEAD
                    color: theme.light.hex,
=======
                    color: theme.pale.hex,
>>>>>>> 0a8b9a59afb000c2219764df98a1b792d689da7c
                    alignItems: 'center',
                    justifyContent: 'center',
                }),
            }
        },
        story: {
            container: core_1.css({
                background: 'linear-gradient(45deg, #3023AE 0%, #C86DD7 100%)',
                backgroundAttachment: 'fixed',
                color: theme.textOnAccent.rgb,
                padding: '5rem',
                flex: 1,
                minWidth: '24rem',
            }),
        }
    };
});
