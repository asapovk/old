"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) {
    return {
        textColor: theme.text.rgb,
        backgroundColor: theme.interface.rgb,
        borderColor: theme.pale.rgb,
        iconColor: theme.lowlight.rgb,
        label: {
            color: theme.lowlight.rgb
        },
        singleline: {
            field: {
                borderColor: theme.pale.rgb,
                backgroundColor: theme.interface.rgb,
                borderRadius: theme.radius.default
            },
            input: {
                color: theme.text.rgb
            },
            placeholder: {
                color: theme.lowlight.rgb
            }
        },
        hint: {
            color: theme.lowlight.rgb
        }
    };
});