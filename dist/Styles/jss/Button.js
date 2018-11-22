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
exports.default = (function (theme) {
    return {
        main: function (decoration, inversion) {
            var style = {
                background: theme.interface.rgb,
                boxShadow: theme.shadows.button,
                borderRadius: theme.radius.button,
                color: decoration ? theme.textOnAccent.rgb : theme.text.rgb,
                border: 'none',
            };
            switch (decoration) {
                case 'highlight':
                    style.background = theme.highlight.rgb;
                    break;
                case 'red':
                    style.background = theme.accents.red.rgb;
                    break;
                case 'green':
                    style.background = theme.accents.green.rgb;
                    break;
                case 'orange':
                    style.background = theme.accents.orange.rgb;
                    break;
                case 'blue':
                    style.background = theme.accents.blue.rgb;
                    break;
                case 'grayscale':
                    style.background = theme.highlight.grayscale;
                    break;
                case 'none':
                    style.background = 'none';
                    style.border = 'none';
                    style.boxShadow = 'none';
                    style.padding = 0;
                    style.color = theme.text.rgb;
                    break;
                default:
                    style.borderWidth = theme.borders.button.width;
                    style.borderStyle = theme.borders.button.style;
                    style.borderColor = theme.pale.rgb;
            }
            if (inversion) {
                style = __assign({}, style, { background: theme.interface.rgb, color: style.background });
            }
            return style;
        }
    };
});
