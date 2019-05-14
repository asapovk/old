"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var hooks_1 = require("../../hooks");
exports.default = (function (position) {
    var theme = hooks_1.useTheme().theme;
    return {
        popup: core_1.css({
            display: "none",
            position: "absolute",
            top: "calc(100% + .5rem)",
            left: "50%",
            transform: "translateX(-50%)",
            background: theme.interface.rgb,
            borderColor: theme.borders.button.borderColor,
            borderRadius: theme.borders.button.borderRadius,
            borderStyle: theme.borders.button.borderStyle,
            borderWidth: theme.borders.button.borderWidth,
            boxShadow: "0px 2px 4px 0px " + theme.defaultShadow.rgb,
            padding: "0.5rem 1rem",
            color: theme.text.rgb,
            pointerEvents: "none",
            transition: "all .2s ease-in-out"
        })
    };
});
