"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) {
    var backgroundColor = theme.background.hex;
    var titleColor = theme.text.hex;
    var backButtonColor = theme.text.hex;
    var secondaryButtonBackground = theme.highlight.grayscale;
    if (theme.name === "gazprom") {
        titleColor = "#fff";
        backgroundColor = "#000";
        backButtonColor = "#fff";
        secondaryButtonBackground = theme.background.rgba(0.2);
    }
    return {
        main: {
            backgroundColor: backgroundColor,
            titleColor: titleColor
        },
        submitButton: {
            width: "100%"
        },
        secondaryButton: {
            width: "100%",
            background: secondaryButtonBackground
        },
        backButton: {
            position: "absolute",
            left: "-2rem",
            top: "0.4rem"
        },
        backButtonIcon: {
            color: backButtonColor
        },
    };
});
