"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) {
    return {
        main: {
            color: theme.text.rgb
        },
        input: function (isRadio) {
            return {
                borderColor: theme.text.rgb,
                borderRadius: isRadio ? '15px' : theme.corner
            };
        },
        inputActive: function (isRadio) {
            return {
                borderColor: theme.highlight.rgb,
                borderRadius: isRadio ? '15px' : theme.corner
            };
        },
        circle: {
            background: theme.text.rgb
        }
    };
});
