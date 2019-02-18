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
    var theme = hooks_1.useTheme().theme;
    var typography = hooks_1.useTypography();
    var context = getThemedStyles(theme);
    var maxWidth = '1200px';
    return {
        login: {
            container: core_1.css({
                minWidth: '36rem'
            }),
            wrapper: core_1.css({
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                minWidth: '36rem',
                justifyContent: 'center'
            }),
            title: core_1.css(__assign({ color: context.titleColor, marginBottom: '2.75rem' }, typography.display[1])),
            logo: core_1.css({
                height: '4.5rem',
                marginBottom: '2.75rem',
            }),
            welcome: core_1.css({
                maxWidth: '26rem',
                marginTop: '5rem'
            }),
            actions: {
                container: core_1.css({
                    paddingTop: '4rem',
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
            main: core_1.css({
                background: 'linear-gradient(45deg, #3023AE 0%, #C86DD7 100%)',
                backgroundAttachment: 'fixed',
                color: theme.textOnAccent.rgb,
                padding: '5rem',
                flex: 1
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
