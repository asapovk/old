"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var hooks_1 = require("../../hooks");
exports.default = (function () {
    var theme = hooks_1.useTheme().theme;
    var typography = hooks_1.useTypography();
    return {
        wrapper: core_1.css({
            width: "2rem",
            height: "2rem"
        }),
        icon: core_1.css({
            width: "100%",
            height: "100%",
            color: theme.highlight.hex,
        }),
    };
});
