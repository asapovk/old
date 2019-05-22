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
var useTypography_1 = __importDefault(require("../../hooks/useTypography"));
exports.default = (function (props) {
    var theme = useTheme_1.default().theme;
    var decor = decorations(props, theme);
    var color = props.color, disabled = props.disabled, loading = props.loading;
    return {
        color: color,
        button: core_1.css(__assign({}, decor, { fontWeight: 'bold', position: 'relative', outline: 'none', cursor: 'pointer', userSelect: 'none' }, (disabled && {
            background: theme.disabled.hex,
            boxShadow: 'none',
            color: 'rgb(163,163,163)',
            cursor: 'not-allowed !important',
        }))),
        children: core_1.css(__assign({ display: 'inline-block', position: 'relative', transition: 'all .3s ease', transform: 'scale(1)', opacity: 1 }, (loading && {
            transform: 'scale(1.75)',
            opacity: 0
        }))),
        loading: core_1.css(__assign({ position: 'absolute', pointerEvents: 'none', top: '50%', left: '50%', marginLeft: '-2rem', marginTop: '-2rem', display: 'inline-block', visibility: 'hidden', opacity: 0, transform: 'scale(0.1)', transition: 'all .3s ease' }, (loading && {
            transform: "scale(" + decor.loadingScale + ")",
            visibility: 'visible',
            opacity: 1,
        }))),
    };
});
function decorations(props, theme) {
    var typography = useTypography_1.default();
    var height = '2rem';
    var padding = '0 1rem';
    var textStyles = typography.caption[2];
    var background = theme.interface.rgb;
    var boxShadow = theme.shadows.button.default;
    var borderRadius = theme.borders.button.borderRadius;
    var textColor = theme.text.rgb;
    var outlineColor = theme.text.rgb;
    var border = theme.borders.button.borderWidth + " " + theme.borders.button.borderStyle + " " + theme.borders.button.borderColor;
    var loadingScale = 0.3;
    switch (props.color) {
        case 'highlight':
            background = theme.highlight.rgb;
            textColor = theme.textOnAccent.rgb;
            outlineColor = background;
            border = 'none';
            break;
        case 'brand-red':
            background = theme.brandColors.red.hex;
            textColor = theme.textOnAccent.rgb;
            outlineColor = background;
            border = 'none';
            break;
        case 'brand-purple':
            background = theme.brandColors.purple.hex;
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
    switch (props.decoration) {
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
    switch (props.size) {
        case 'small':
            height = '1.75rem';
            textStyles = typography.caption[3];
            loadingScale = 0.25;
            break;
        case 'large':
            height = '2.75rem';
            padding = '0 1.5rem';
            textStyles = typography.caption[1];
            loadingScale = 0.4;
            break;
    }
    return __assign({ padding: padding,
        loadingScale: loadingScale,
        background: background,
        boxShadow: boxShadow,
        borderRadius: borderRadius, color: textColor, border: border,
        height: height, transition: 'all .1s ease-in-out', willChange: 'box-shadow', '&:active': {
            boxShadow: props.disabled
                ? 'none'
                : !props.decoration
                    ? theme.shadows.button.active
                    : 'none',
            border: border
        } }, textStyles);
}
