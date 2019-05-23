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
exports.default = (function (props) {
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
    var size = {
        top: '0',
        contaier: '2rem',
        origin: '1rem',
        left: '0.85rem',
        width: '0.2rem',
        height: '0.5rem'
    };
    if (props.size === 'extra-large') {
        size.contaier = '6rem';
        size.origin = '3rem';
        size.left = '2.8rem';
        size.width = '0.385rem';
        size.height = '1.75rem';
    }
    if (props.size === 'extra-large') {
        size.contaier = '4rem';
        size.origin = '2rem';
        size.left = '1.875rem';
        size.width = '0.25rem';
        size.height = '1rem';
    }
    if (props.size === 'small') {
        size.contaier = '1rem';
        size.origin = '0.5rem';
        size.left = '0.5rem';
        size.width = '1px';
        size.height = '0.25rem';
    }
    return {
        theme: theme,
        spinner: core_1.css({
            display: "inline-block",
            position: "relative",
            width: size.contaier,
            height: size.contaier,
            minHeight: size.contaier,
            "> div": {
                transformOrigin: size.origin + " " + size.origin,
                animation: spinnerAnimation + " 1.2s linear infinite",
                "&::after": {
                    content: "''",
                    display: "block",
                    position: "absolute",
                    top: size.top,
                    left: size.left,
                    width: size.width,
                    height: size.height,
                    borderRadius: "20%",
                    opacity: 1,
                    background: props.invert ? theme.interface.hex : theme.text.hex,
                },
            }
        }),
        wrapper: function (center) { return core_1.css(__assign({ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', zIndex: 999999 }, (center && {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }))); },
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
                    backgroundColor: theme.highlight.hex,
                },
                "> :nth-of-type(2)": {
                    top: Math.sqrt(3) * (edge / 2) - circleRadius,
                    left: (edge / 2) - circleRadius,
                    backgroundColor: theme.highlightSecondary.hex
                },
                "> :nth-of-type(3)": {
                    top: Math.sqrt(3) * (edge / 2) - circleRadius,
                    left: -(edge / 2) - circleRadius,
                    backgroundColor: theme.highlightSecondary.hex
                }
            }
        })
    };
});
