"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) {
    return {
        text: theme.text.hex,
        accent: theme.highlight.hex,
        background: theme.background.hex,
        chartTextColor: theme.lowlight.hex
    };
});
