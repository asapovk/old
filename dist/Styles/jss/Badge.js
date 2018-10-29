"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) {
    return {
        container: {
            position: "relative",
            display: "inline-block",
        },
        main: function (color, top, right, left) {
            if (top === void 0) { top = -12; }
            if (right === void 0) { right = -12; }
            if (left === void 0) { left = 'auto'; }
            var style = {
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
                background: theme.interface.rgb,
                boxShadow: '0px 2px 6px 0px ' + theme.shadow.rgb,
                borderRadius: 24,
                color: theme.textOnAccent.hex,
                fontSize: '0.8rem',
                fontWeight: 600,
                borderColor: theme.pale.rgba(0)
            };
            switch (color) {
                case 'highlight':
                    style.background = theme.highlight.rgb;
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
                case 'red':
                default:
                    style.background = theme.accents.red.rgb;
                    break;
            }
            return style;
        }
    };
});
