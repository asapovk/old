"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("../../hooks");
exports.default = (function () {
    var theme = hooks_1.useTheme().theme;
    return {
        theme: theme
    };
});
