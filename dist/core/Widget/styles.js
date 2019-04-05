"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function (clickable) {
    var theme = useTheme_1.default().theme;
    return {
        container: core_1.css({
            position: "relative",
            boxSizing: "border-box",
            lineHeight: 1,
            padding: "1rem",
            minWidth: "16rem",
            overflow: "hidden",
            background: theme.interface.rgb,
            borderRadius: "0.5rem",
            border: "1px solid " + theme.pale.rgb,
            transition: "all .2s ease",
            userSelect: "none",
            boxShadow: theme.shadows.card
        }, clickable && {
            "&:hover": {
                transform: "scale(1.05)"
            },
            "&:active": {
                transform: "scale(1.03)"
            }
        }),
        title: core_1.css({
            paddingRight: "1rem",
            fontSize: "1.125rem",
            textTransform: "uppercase"
        }),
        loading: core_1.css({
            fontSize: "1.5rem",
            fontWeight: 500,
            textAlign: "center",
            "> svg": {
                color: theme.highlight.hex
            }
        }),
        loadingText: core_1.css({
            fontSize: "1rem",
            paddingTop: "0.75rem",
            color: theme.lowlight.hex
        }),
        icon: core_1.css({
            color: theme.highlight.hex
        })
    };
});
