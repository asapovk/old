"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var useTypography_1 = __importDefault(require("../../hooks/useTypography"));
exports.default = (function (size, loading, disabled, labelCase, decoration, inversion, thin) {
    var theme = useTheme_1.default().theme;
    var typography = useTypography_1.default();
    return core_1.css(__assign({}, getDecoration(decoration, inversion, theme), typography.caption[2], { height: '2rem', fontWeight: thin ? 'normal' : 'bold', position: 'relative', outline: 'none', cursor: 'pointer', userSelect: 'none', '&:active': {
            boxShadow: 'none !important'
        } }), size === 'small' && __assign({ height: '1.75rem' }, typography.caption[3]), size === 'large' && __assign({ height: '2.75rem', padding: '0 1.5rem' }, typography.caption[1]), disabled && {
        opacity: 0.5,
        cursor: 'not-allowed !important'
    }, loading && core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            > span:first-child{\n                filter: blur(1px);\n                opacity: 0.4;\n            }\n            > span:last-child{\n                position: absolute;\n                left: 50%;\n                margin-left: -0.5rem;\n                > svg {\n                    font-size: 1rem;\n                }\n            }\n        "], ["\n            > span:first-child{\n                filter: blur(1px);\n                opacity: 0.4;\n            }\n            > span:last-child{\n                position: absolute;\n                left: 50%;\n                margin-left: -0.5rem;\n                > svg {\n                    font-size: 1rem;\n                }\n            }\n        "]))), labelCase && {
        textTransform: 'uppercase'
    });
});
function getDecoration(decoration, inversion, theme) {
    var padding = '0 1rem';
    var background = theme.interface.rgb;
    var boxShadow = theme.shadows.button;
    var borderRadius = theme.radius.button;
    var color = decoration ? theme.textOnAccent.rgb : theme.text.rgb;
    var border = 'none';
    switch (decoration) {
        case 'highlight':
            background = theme.highlight.rgb;
            break;
        case 'red':
            background = theme.accents.red.rgb;
            break;
        case 'green':
            background = theme.accents.green.rgb;
            break;
        case 'orange':
            background = theme.accents.orange.rgb;
            break;
        case 'blue':
            background = theme.accents.blue.rgb;
            break;
        case 'grayscale':
            background = theme.highlight.grayscale;
            break;
        case 'inverse':
            background = theme.background2.hex;
            boxShadow = 'none';
            color = theme.highlight.rgb;
            break;
        case 'outline':
            background = 'unset';
            boxShadow = 'none';
            border = '1px solid ' + theme.highlight.rgb;
            color = theme.highlight.rgb;
            break;
        case 'none':
            background = 'none';
            border = 'none';
            boxShadow = 'none';
            padding = '0';
            color = theme.text.rgb;
            break;
        default:
            border = theme.borders.button.width + ' ' + theme.borders.button.style + ' ' + theme.borders.button.color;
    }
    if (inversion) {
        color = background;
        background = theme.interface.rgb;
    }
    return {
        padding: padding, background: background, boxShadow: boxShadow, borderRadius: borderRadius, color: color, border: border
    };
}
var templateObject_1;
