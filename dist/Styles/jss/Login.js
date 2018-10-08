"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) {
    return {
        textColor: theme.text.rgb,
        textShadow: "0px 1px 6px rgba(" + theme.shadow.rgb + ", 0.5)"
    };
});
