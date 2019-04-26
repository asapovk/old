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
exports.default = (function (active) {
    var theme = useTheme_1.default().theme;
    return {
        main: core_1.css(__assign({ background: "linear-gradient(" + theme.gradients.card[0] + ", " + theme.gradients.card[1] + ")", boxShadow: theme.shadows.card.default, userSelect: "none", padding: "1rem", height: "9rem", minWidth: "15rem", 
            // marginBottom: '1.25rem',
            overflow: "hidden", willChange: "height", boxSizing: "border-box", transition: "all .3s" }, theme.borders.card), active && {
            // background: "linear-gradient(80deg," + theme.gradient.card[0] + "," + theme.gradient.card[1] + ")",
            // border: 'none',
            boxShadow: theme.shadows.card.active,
            // color: theme.textOnAccent.rgb,
            // marginLeft: '30px',
            "@media (max-width: 640px)": {
                transform: "translateX(0)"
            }
        }),
        animation: {
            wave: {
                1: core_1.css({
                    transition: "transform 3s",
                    willChange: "transform",
                    transform: "translateX(-300px)"
                }, active && {
                    transform: "translateX(0)"
                }),
                2: core_1.css({
                    transition: "transform 2s",
                    willChange: "transform",
                    transform: "translateX(-630px)"
                }, active && {
                    transform: "translateX(0)"
                })
            },
            circle: {
                1: core_1.css({
                    transition: "transform 2s",
                    willChange: "transform",
                    transform: "translateX(0px) translateY(0px)"
                }, active && {
                    transform: "translateX(-50px) translateY(50px)"
                }),
                2: core_1.css({
                    transition: "transform 3s",
                    willChange: "transform",
                    transform: "translateX(0px) translateY(0px)"
                }, active && {
                    transform: "translateX(-120px) translateY(120px)"
                })
            }
        },
        color: theme.text.rgba(0.25)
    };
});
