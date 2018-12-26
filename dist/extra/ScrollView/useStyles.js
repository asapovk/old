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
exports.default = (function (horizontal, isWebkit, hidden, width, height, customCss) {
    if (customCss === void 0) { customCss = {}; }
    var scrollbar = hooks_1.useTheme().theme.scrollbar;
    return {
        root: core_1.css({
            position: 'relative',
            overflow: 'hidden',
            width: width,
            flex: width ? "inherit" : 1,
            height: height || (!horizontal ? "100%" : "initial"),
        }),
        scrollview: core_1.css(__assign({ position: 'relative', height: horizontal ? "auto" : "100%", overflowX: horizontal ? "scroll" : "hidden", overflowY: horizontal ? "hidden" : "scroll", marginRight: isWebkit ? 0 : -15, marginBottom: (isWebkit && horizontal) ? 0 : -15, whiteSpace: horizontal ? "nowrap" : "normal", "&::-webkit-scrollbar": {
                display: "none"
            } }, customCss)),
        scrollbar: core_1.css({
            position: "absolute",
            borderStyle: 'solid',
            borderRadius: scrollbar.borderRadius,
            borderWidth: scrollbar.borderWidth,
            borderColor: scrollbar.borderColor,
            background: scrollbar.backgroundColor,
            top: horizontal ? 'initial' : 0,
            left: !horizontal ? "initial" : 0,
            bottom: horizontal ? scrollbar.offsetPosition : 0,
            right: !horizontal ? scrollbar.offsetPosition : 0,
            opacity: hidden ? 0 : 1,
            overflow: "hidden",
            visibility: hidden ? "hidden" : "visible",
            transition: "all 0.15s",
        }),
        thumb: core_1.css({
            position: "relative",
            borderStyle: 'solid',
            borderRadius: scrollbar.thumb.borderRadius,
            borderWidth: scrollbar.thumb.borderWidth,
            borderColor: scrollbar.thumb.borderColor,
            height: scrollbar.thumb.size,
            width: scrollbar.thumb.size,
            background: scrollbar.thumb.color,
        }),
    };
});
