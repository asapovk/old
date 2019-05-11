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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function (narrowed) {
    if (narrowed === void 0) { narrowed = false; }
    var theme = useTheme_1.default().theme;
    return {
        groupTitleContainer: core_1.css({
            flex: 1,
            marginBottom: "0.75rem",
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            minWidth: 0,
            boxShadow: "0 1.25rem 2.5rem rgba(0,0,0,.1)",
            borderRadius: "1rem",
            backgroundColor: theme.background2.hex
        }),
        groupTitle: core_1.css(__assign({ padding: "0.25rem 1rem", borderRadius: "1rem", backgroundColor: "rgb(229, 228, 233)" }, (narrowed && {
            padding: 0
        }))),
        row: core_1.css({
            marginBottom: "1.5rem",
            overflow: "hidden",
            ":last-of-type": {
                marginBottom: 0
            }
        }, narrowed && {
            borderBottom: "1px dashed #E5E5E5",
            marginBottom: 0,
            boxSizing: "border-box",
            ":last-of-type": {
                border: "none"
            }
        }),
        moreContainer: core_1.css({
            userSelect: "none"
        }),
        moreButton: core_1.css({
            background: theme.interface.rgb,
            borderRadius: "50%",
            padding: "0.75rem",
            boxShadow: "0 0.125rem 0.375rem rgba(0,0,0,.15)"
        })
    };
});
