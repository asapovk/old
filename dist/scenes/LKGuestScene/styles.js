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
var hooks_1 = require("../../hooks");
exports.default = (function () {
    var theme = hooks_1.useTheme().theme;
    var typography = hooks_1.useTypography();
    var context = getThemedStyles(theme);
    var maxWidth = '1200px';
    return {
        main: {
            container: {
                background: context.backgroundColor,
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '75vh',
            },
            title: __assign({ color: context.titleColor, marginBottom: '2.75rem' }, typography.display[1]),
            logo: {
                height: '4.5rem',
                marginBottom: '2.75rem',
            },
            welcome: {
                width: '20rem',
                marginTop: '8rem',
                marginBottom: '8em'
            },
            wrapper: {
                maxWidth: maxWidth
            }
        },
        footer: {
            main: {
                minHeight: '25vh',
                alignItems: 'center',
                justifyContent: 'center',
            },
            wrapper: {
                maxWidth: maxWidth
            },
            item: {
                marginTop: '5rem',
                marginBottom: '5rem',
            },
            icon: {
                marginBottom: '1.5rem',
                fontSize: '5rem',
                color: theme.lowlight.hex
            },
            label: __assign({ color: theme.highlight.hex }, typography.text[1]),
            separator: {
                borderLeft: '1px solid ' + theme.pale.hex
            }
        },
        form: {
            submitButton: {
                width: "100%"
            },
            secondaryButton: {
                width: "100%",
                background: context.secondaryButtonBackground
            },
            backButton: {
                position: "absolute",
                left: "-2rem",
                top: "0.4rem"
            },
            backButtonIcon: {
                color: context.backButtonColor
            },
        }
    };
});
function getThemedStyles(theme) {
    var backgroundColor = theme.background.hex;
    var titleColor = theme.text.hex;
    var backButtonColor = theme.text.hex;
    var secondaryButtonBackground = theme.highlight.grayscale;
    if (theme.name === "gazpromTheme") {
        titleColor = "#fff";
        backgroundColor = "#000";
        backButtonColor = "#fff";
        secondaryButtonBackground = theme.background.rgba(0.2);
    }
    return { backgroundColor: backgroundColor, titleColor: titleColor, backButtonColor: backButtonColor, secondaryButtonBackground: secondaryButtonBackground };
}
