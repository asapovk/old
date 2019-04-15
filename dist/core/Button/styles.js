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
exports.default = (function (props) {
    var decoration = props.decoration, color = props.color, size = props.size, disabled = props.disabled, loading = props.loading, labelSize = props.labelSize, labelCase = props.labelCase, labelWight = props.labelWight;
    return core_1.css(__assign({}, getDecoration(decoration, color, size, labelSize), { fontWeight: 'bold', position: 'relative', outline: 'none', cursor: 'pointer', userSelect: 'none' }), labelWight && {
        fontWeight: labelWight
    }, labelCase && {
        textTransform: labelCase
    }, disabled && {
        opacity: 0.5,
        cursor: 'not-allowed !important',
    }, loading && core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            > span:first-of-type{\n                filter: blur(1px);\n                opacity: 0.4;\n            }\n            > span:last-of-type{\n                position: absolute;\n                left: 50%;\n                margin-left: -0.5rem;\n                > svg {\n                    font-size: 1rem;\n                }\n            }\n        "], ["\n            > span:first-of-type{\n                filter: blur(1px);\n                opacity: 0.4;\n            }\n            > span:last-of-type{\n                position: absolute;\n                left: 50%;\n                margin-left: -0.5rem;\n                > svg {\n                    font-size: 1rem;\n                }\n            }\n        "]))));
});
function getDecoration(decoration, color, size, labelSize) {
    var theme = useTheme_1.default().theme;
    var typography = useTypography_1.default();
    var height = '2rem';
    var padding = '0 1rem';
    var textStyles = typography.caption[2];
    var background = theme.interface.rgb;
    var boxShadow = theme.shadows.button;
    var borderRadius = theme.radius.button;
    var textColor = theme.text.rgb;
    var outlineColor = theme.text.rgb;
    var border = theme.borders.button.width + ' ' + theme.borders.button.style + ' ' + theme.pale.rgb;
    var filter;
    switch (color) {
        case 'highlight':
            background = theme.highlight.rgb;
            textColor = theme.textOnAccent.rgb;
            outlineColor = background;
            border = 'none';
            break;
        case 'brand-red':
            background = theme.brand.red.hex;
            textColor = theme.textOnAccent.rgb;
            outlineColor = background;
            border = 'none';
            break;
        case 'brand-purple':
            background = theme.brand.purple.hex;
            textColor = theme.textOnAccent.rgb;
            outlineColor = background;
            border = 'none';
            break;
        case 'red':
            background = theme.accents.red.rgb;
            textColor = theme.textOnAccent.rgb;
            outlineColor = background;
            border = 'none';
            break;
        case 'green':
            background = theme.accents.green.rgb;
            textColor = theme.textOnAccent.rgb;
            outlineColor = background;
            border = 'none';
            break;
        case 'orange':
            background = theme.accents.orange.rgb;
            textColor = theme.textOnAccent.rgb;
            outlineColor = background;
            border = 'none';
            break;
        case 'blue':
            background = theme.accents.blue.rgb;
            textColor = theme.textOnAccent.rgb;
            outlineColor = background;
            border = 'none';
            break;
        case 'grayscale':
            background = theme.highlight.grayscale;
            textColor = theme.textOnAccent.rgb;
            outlineColor = background;
            border = 'none';
            break;
    }
    switch (decoration) {
        case 'inverse':
            background = [textColor, textColor = background][0];
            break;
        case 'outline':
            border = '1px solid ' + outlineColor;
            textColor = outlineColor;
            boxShadow = 'none';
            background = 'unset';
            break;
        case 'blur':
            textColor = theme.highlight.rgb;
            background = theme.background2.rgb;
            border = 'none';
            boxShadow = 'none';
            break;
        case 'none':
            background = 'none';
            border = 'none';
            boxShadow = 'none';
            padding = '0';
            textColor = theme.text.rgb;
            break;
    }
    switch (size) {
        case 'small':
            height = '1.75rem';
            textStyles = typography.caption[3];
            break;
        case 'large':
            height = '2.75rem';
            padding = '0 1.5rem';
            textStyles = typography.caption[1];
            break;
    }
    switch (labelSize) {
        case 'small':
            textStyles = typography.caption[3];
            break;
        case 'normal':
            textStyles = typography.caption[2];
            break;
        case 'large':
            textStyles = typography.caption[1];
            break;
    }
    var pseudo = {
        '&:active': {
            boxShadow: 'none !important',
            border: border
        }
    };
    return __assign({ filter: filter, padding: padding, background: background, boxShadow: boxShadow, borderRadius: borderRadius, color: textColor, border: border, height: height }, textStyles, pseudo);
}
var templateObject_1;
