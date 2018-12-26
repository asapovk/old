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
var useTheme_1 = __importDefault(require("../hooks/useTheme"));
var useTypography_1 = __importDefault(require("../hooks/useTypography"));
exports.default = (function (color, top, right, left) {
    if (top === void 0) { top = -12; }
    if (right === void 0) { right = -12; }
    if (left === void 0) { left = 'auto'; }
    var theme = useTheme_1.default().theme;
    var typography = useTypography_1.default();
    return {
        container: core_1.css({
            position: 'relative',
            display: 'inline-block'
        }),
        main: core_1.css(__assign({}, typography.caption[3], { position: "absolute", zIndex: 10, top: top, right: right, left: left, padding: '0 0.5rem', minWidth: '1.5rem', minHeight: '1.5rem', boxSizing: "border-box", display: "flex", justifyContent: 'center', alignItems: 'center', background: getBackground(color, theme), boxShadow: '0px 2px 6px 0px ' + theme.shadow.rgb, borderRadius: 24, color: theme.textOnAccent.hex, fontWeight: 600, borderColor: theme.pale.rgba(0) }))
    };
});
function getBackground(color, theme) {
    var background = theme.interface.rgb;
    switch (color) {
        case 'highlight':
            background = theme.highlight.rgb;
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
        case 'red':
        default:
            background = theme.accents.red.rgb;
            break;
    }
    return background;
}
