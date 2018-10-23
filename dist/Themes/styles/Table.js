"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) {
    return {
        main: {
            backgroundColor: theme.interface.rgb,
            titleColor: theme.lowlight.rgb,
            shadowColor: theme.shadow.rgb,
            borderColor: theme.pale.rgb,
            borderRadius: theme.radius.default
        },
        row: {
            backgroundColor: theme.interface.rgb,
            borderColor: theme.pale.rgb,
        },
        actions: {
            backgroundColor: theme.interface.rgb,
            actionColor: theme.highlight.rgb,
        },
        form: {
            backgroundColor: theme.background.rgb,
            borderColor: theme.pale.rgb,
        },
        pagination: {
            textColor: theme.text.rgb,
            backgroundColor: theme.interface.rgb,
        }
    };
});
