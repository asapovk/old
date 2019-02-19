"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var hooks_1 = require("../../hooks");
exports.default = (function () {
    var _a, _b, _c, _d;
    var theme = hooks_1.useTheme().theme;
    var typography = hooks_1.useTypography();
    var context = getThemedStyles(theme);
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
        login: {
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
                    maxWidth: '12rem'
                },
                _d[mq[1]] = {
                    alignSelf: 'center',
                },
                _d)),
            title: core_1.css({
                color: context.titleColor,
                marginTop: '4rem',
                marginBottom: '2rem'
            }),
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
                }),
                icon: core_1.css({
                    marginBottom: '1.5rem',
                    fontSize: '2rem',
                    color: theme.pale.hex,
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
        },
        form: {
            submitButton: core_1.css({
                width: "100%"
            }),
            secondaryButton: core_1.css({
                width: "100%",
                background: context.secondaryButtonBackground
            }),
            backButton: core_1.css({
                position: "absolute",
                left: "-2rem",
                top: "0.4rem"
            }),
            backButtonIcon: core_1.css({
                color: context.backButtonColor
            }),
        }
    };
});
function getThemedStyles(theme) {
    var backgroundColor = theme.background.hex;
    var titleColor = theme.text.hex;
    var backButtonColor = theme.text.hex;
    var secondaryButtonBackground = theme.highlight.grayscale;
    if (theme.name === "gazpromTheme") {
    }
    if (theme.name === "whiteCurrant") {
    }
    return { backgroundColor: backgroundColor, titleColor: titleColor, backButtonColor: backButtonColor, secondaryButtonBackground: secondaryButtonBackground };
}
