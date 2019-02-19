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
    var _a, _b, _c;
    var theme = hooks_1.useTheme().theme;
    var typography = hooks_1.useTypography();
    var context = getThemedStyles(theme);
    var breakpoints = [414, 768, 1024];
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
                    flexBasis: '36rem',
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
                },
                _b)),
            welcome: core_1.css((_c = {
                    maxWidth: '26rem',
                    minWidth: '17.5rem',
                    margin: '4rem'
                },
                _c[mq[0]] = {
                    margin: '2.5rem 1.25rem',
                },
                _c[mq[1]] = {
                    maxWidth: 'max-content',
                },
                _c)),
            logo: core_1.css({
                maxHeight: '4rem',
                maxWidth: '12rem',
            }),
            title: core_1.css(__assign({ color: context.titleColor, margin: '2.5rem 0' }, typography.display[1])),
            actions: {
                container: core_1.css({
                    paddingTop: '4rem',
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
                    fontSize: '4rem',
                    color: theme.pale.hex,
                    alignItems: 'center',
                    justifyContent: 'center',
                }),
                label: core_1.css(__assign({ color: theme.highlight.hex }, typography.text[1])),
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
