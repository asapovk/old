"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
exports.default = (function (theme) {
    return {
        container: core_1.css({
            position: 'relative',
            display: 'inline-block'
        }),
        main: function (color, top, right, left) {
            if (top === void 0) { top = -12; }
            if (right === void 0) { right = -12; }
            if (left === void 0) { left = 'auto'; }
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
            return core_1.css({
                position: "absolute",
                zIndex: 10,
                top: top,
                right: right,
                left: left,
                padding: '0 6px',
                minWidth: 24,
                boxSizing: "border-box",
                textAlign: "center",
                display: "inline-block",
                background: background,
                boxShadow: '0px 2px 6px 0px ' + theme.shadow.rgb,
                borderRadius: 24,
                color: theme.textOnAccent.hex,
                fontSize: '0.8rem',
                fontWeight: 600,
                borderColor: theme.pale.rgba(0)
            });
        }
    };
});
