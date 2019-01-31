"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) {
    return {
        background: theme.interface.rgb,
        labelColor: theme.lowlight.rgb,
        textColor: theme.text.rgb,
        borderColor: theme.pale.rgb,
        SelectMenuItem: {
            text: theme.text.rgb,
            background: theme.pale.rgba(0.5)
        }
    };
});
