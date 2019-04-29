"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) {
    return {
        tab: {
            borderRadius: '0.25rem',
            color: theme.text.hex
        },
        tabActive: {
            borderRadius: '0.25rem',
            color: theme.interface.hex
        },
        toolbar: {
            borderRadius: '0.25rem',
            background: theme.interface.hex
        },
        container: {
            borderColor: theme.pale.hex,
            background: theme.interface.hex,
            borderRadius: '0.25rem',
        },
        hl: {
            borderRadius: '0.25rem',
            borderColor: theme.interface.hex,
            background: "linear-gradient(80deg," + theme.gradients.default[0] + "," + theme.gradients.default[1] + ")"
        }
    };
});
