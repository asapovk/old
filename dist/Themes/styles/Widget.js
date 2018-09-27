"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) {
    return {
        background: theme.interface.rgb,
        borderColor: "rgba(" + theme.pale.rgb + ", 1)",
        lowlight: theme.lowlight.rgb,
        highlight: theme.highlight.rgb
    };
});
