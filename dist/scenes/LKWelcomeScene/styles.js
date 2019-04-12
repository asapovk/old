"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var hooks_1 = require("../../hooks");
exports.default = (function () {
    var _a, _b, _c, _d, _e;
    var theme = hooks_1.useTheme().theme;
    var breakpoints = [414, 960, 1280, 550];
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
                    maxWidth: '12rem',
                    marginBottom: '4rem'
                },
                _d[mq[1]] = {
                    alignSelf: 'center',
                },
                _d)),
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
                    cursor: 'pointer',
                    justifyContent: 'flex-start'
                }),
                icon: core_1.css({
                    fontSize: '2rem',
                    color: theme.light.hex,
                    alignItems: 'center',
                    justifyContent: 'center',
                }),
            }
        },
        story: {
            container: core_1.css((_e = {
                    background: 'linear-gradient(45deg, #3023AE 0%, #C86DD7 100%)',
                    backgroundAttachment: 'fixed',
                    padding: '5rem',
                    flex: 1,
                    minWidth: '24rem'
                },
                _e[mq[2]] = {
                    padding: '5rem 2rem 2rem 2rem'
                },
                _e[mq[1]] = {
                    padding: '5rem'
                },
                _e[mq[3]] = {
                    padding: 0
                },
                _e)),
        }
    };
});
