"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var hooks_1 = require("../../../hooks");
exports.default = (function () {
    var theme = hooks_1.useTheme().theme;
    var typography = hooks_1.useTypography();
    var breakpoints = [414, 768, 1024];
    var mq = breakpoints.map(function (bp) { return "@media (max-width: " + bp + "px)"; });
    return {
        container: core_1.css({
            flex: 1,
            minHeight: '100%',
            boxSizing: 'border-box',
        })
    };
});
