"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) {
    var backgroundColor = theme.background.hex;
    var titleColor = theme.text.hex;
    if (theme.name === "gazprom") {
        titleColor = "#fff";
        backgroundColor = "#000";
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
            background: theme.pale.hex
        }
    };
});
