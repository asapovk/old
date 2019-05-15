"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var hooks_1 = require("../../hooks");
exports.default = (function (position) {
    var theme = hooks_1.useTheme().theme;
    return {
        popup: core_1.css({
            position: "fixed",
            zIndex: 999,
            background: theme.interface.rgb,
            borderColor: theme.borders.button.borderColor,
            borderRadius: theme.borders.button.borderRadius,
            borderStyle: theme.borders.button.borderStyle,
            borderWidth: theme.borders.button.borderWidth,
            boxShadow: theme.shadows.button.default,
            border: ".5px solid " + theme.pale.rgb,
            color: theme.text.rgb
        })
    };
});
