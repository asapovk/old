"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function () {
    var theme = useTheme_1.default().theme;
    var spinnerAnimation = core_1.keyframes({
        "0%": { opacity: 1 },
        "100%": { opacity: 0 }
    });
    return {
        spinner: core_1.css({
            display: "inline-block",
            position: "relative",
            width: "4rem",
            height: "4rem",
            "> div": {
                transformOrigin: "2rem 2rem",
                animation: spinnerAnimation + " 1.2s linear infinite",
                "&::after": {
                    content: "''",
                    display: "block",
                    position: "absolute",
                    top: "3px",
                    left: "29px",
                    width: "5px",
                    height: "14px",
                    borderRadius: "20%",
                    opacity: 1,
                    background: "rgb(126, 126, 126)",
                },
            }
        }),
        centeredContainer: core_1.css({
            zIndex: 999999,
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            "> div": {
                position: "absolute",
                left: "50%",
                top: "50%",
                marginLeft: "-2rem",
                marginTop: "-2rem"
            }
        }),
    };
});
