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
            flexBasis: '36rem',
            flexShrink: 0,
            minHeight: '100%',
            padding: '2.5rem 4rem',
            boxSizing: 'border-box',
        }),
        background: core_1.css({
            width: '42rem',
            backgroundColor: theme.background2.hex,
            position: 'absolute',
            top: 0,
            left: '-6rem',
            bottom: 0,
            right: 0,
        }),
    };
});
