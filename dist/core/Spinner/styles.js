"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function (dark, color) {
    var theme = useTheme_1.default().theme;
    var containerRadius = 30;
    var circleRadius = 20;
    var edge = containerRadius * Math.sin(2 * Math.PI / 3) / Math.sin(Math.PI / 6);
    var height = edge * Math.sin(2 * Math.PI / 3);
    var spinnerAnimation = core_1.keyframes({
        "0%": { opacity: 1 },
        "100%": { opacity: 0 }
    });
    var circleScale = core_1.keyframes({
        "0%": { transform: "scale(1)" },
        "40%": { transform: "scale(0.7)" },
        "80%": { transform: "scale(1.2)" },
        "100%": { transform: "scale(1)" },
    });
    var spin = core_1.keyframes({
        to: { transform: 'rotate(360deg)' }
    });
    return {
        spinner: core_1.css({
            display: "inline-block",
            position: "relative",
            width: "4rem",
            height: "4rem",
            "> div": {
                transformOrigin: "2rem 2rem",
                animation: spinnerAnimation + " 1.2s linear infinite",
                "&::after": {
                    content: "''",
                    display: "block",
                    position: "absolute",
                    top: "3px",
                    left: "29px",
                    width: "5px",
                    height: "14px",
                    borderRadius: "20%",
                    opacity: 1,
                    background: color ? theme[color].hex : theme.text.hex,
                },
            }
        }),
        centeredContainer: core_1.css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999999,
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }, dark && {
            "&::before": {
                content: "''",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, .1)'
            }
        }),
        container: core_1.css({
            height: containerRadius * 2,
            width: containerRadius * 2
        }),
        circle: function (index) { return core_1.css({
            position: 'absolute',
            width: circleRadius * 2,
            height: circleRadius * 2,
            backgroundColor: 'red',
            borderRadius: '50%',
            animation: circleScale + " 3s linear infinite",
            animationDelay: index * 2 + "s"
        }); },
        triangleContainer: core_1.css({
            position: 'relative',
            height: containerRadius * 2,
            width: containerRadius * 2,
            animation: spin + " 3s linear infinite",
            "> div": {
                position: 'relative',
                top: 0,
                left: containerRadius - edge / 2,
                height: 0,
                width: 0,
                borderStyle: 'solid',
                borderWidth: "0 " + edge / 2 + "px " + height + "px",
                borderColor: 'transparent',
                "> :nth-of-type(1)": {
                    top: -circleRadius,
                    left: -circleRadius,
                    backgroundColor: color ? theme[color].hex : theme.highlight.hex,
                },
                "> :nth-of-type(2)": {
                    top: Math.sqrt(3) * (edge / 2) - circleRadius,
                    left: (edge / 2) - circleRadius,
                    backgroundColor: color ? theme[color].hex : theme.highlightSecondary.hex
                },
                "> :nth-of-type(3)": {
                    top: Math.sqrt(3) * (edge / 2) - circleRadius,
                    left: -(edge / 2) - circleRadius,
                    backgroundColor: color ? theme[color].hex : theme.highlightSecondary.hex
                }
            }
        })
    };
});
