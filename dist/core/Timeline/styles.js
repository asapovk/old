"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var hooks_1 = require("../../hooks");
exports.default = (function () {
    var theme = hooks_1.useTheme().theme;
    var typography = hooks_1.useTypography();
    return {
        layout: core_1.css({
            display: "flex",
            flex: "1 1 auto",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: theme.background2.hex,
            zIndex: 0
        }),
        line: core_1.css({
            display: "flex",
            flex: "1 1 auto",
            alignItems: "center",
            height: "0.25rem",
            borderRadius: "0.125rem",
            backgroundColor: theme.pale.hex
        }),
        titleRight: core_1.css(__assign({ marginLeft: "0.5rem", textAlign: "right" }, typography.caption[1])),
        titleLeft: core_1.css(__assign({ marginRight: "0.5rem", textAlign: "left", color: theme.lowlight.hex }, typography.caption[1])),
        dotsContainer: core_1.css({
            display: "flex",
            flex: "1 1 auto",
            justifyContent: "space-around",
            margin: "0 5rem",
            zIndex: 0
        }),
        dotTopText: core_1.css(__assign({ display: "flex", flex: "1 1 auto", justifyContent: "center", alignItems: "center", height: "1.5rem", fontWeight: "bold", paddingBottom: "0.25rem" }, typography.display[4])),
        dotBottomText: core_1.css(__assign({ display: "flex", flex: "1 1 auto", justifyContent: "center", alignItems: "center", height: "1.25rem", paddingTop: "0.5rem" }, typography.caption[1])),
        dotContainer: core_1.css({
            display: "flex",
            flex: "1 1 auto",
            justifyContent: "center",
            alignItems: "center",
            "> div": {
                boxSizing: "border-box",
                height: "22px",
                width: "22px",
                border: "4px solid",
                borderRadius: "50%",
                content: "''",
                borderColor: theme.background2.hex,
                backgroundColor: theme.highlight.hex
            }
        })
    };
});
