"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) {
    return {
        background: theme.interface.rgb,
        lowlight: theme.lowlight.rgb,
        highlight: theme.highlight.rgb,
        borderRadius: theme.borders.widget.radius
    };
});
