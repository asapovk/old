"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function () {
    var theme = useTheme_1.default().theme;
    return {
        container: core_1.css({
            display: "inline-block",
            lineHeight: 0,
            animation: spin + " 1.5s linear infinite"
        })
    };
});
var spin = core_1.keyframes({
    "from": {
        transform: "rotate(0deg)"
    },
    "to": {
        transform: "rotate(360deg)"
    }
});
