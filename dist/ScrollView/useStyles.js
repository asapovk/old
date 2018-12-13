"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../hooks/useTheme"));
exports.default = (function (horizontal, isWebkit, hidden) {
    var scrollbar = useTheme_1.default().theme.scrollbar;
    return {
        root: core_1.css({
            position: 'relative',
            overflow: 'hidden',
            height: !horizontal ? "100%" : "initial",
        }),
        scrollview: core_1.css({
            position: 'relative',
            height: horizontal ? "auto" : "100%",
            overflowX: horizontal ? "scroll" : "hidden",
            overflowY: horizontal ? "hidden" : "scroll",
            marginRight: isWebkit ? 0 : -15,
            marginBottom: (isWebkit && horizontal) ? 0 : -15,
            whiteSpace: horizontal ? "nowrap" : "normal",
            "&::-webkit-scrollbar": {
                display: "none"
            },
        }),
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
