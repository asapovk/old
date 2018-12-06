"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) {
    return {
        background: theme.interface.rgb,
        lowlight: theme.lowlight.rgb,
        highlight: theme.highlight.rgb,
        borderRadius: theme.borders.widget.radius,
        borderColor: theme.borders.widget.color,
        borderStyle: theme.borders.widget.style,
        borderWidth: theme.borders.widget.width
    };
});
