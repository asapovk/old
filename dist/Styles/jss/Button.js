"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) {
    return {
        main: function (decoration) {
            var style = {
                background: theme.interface.rgb,
                boxShadow: theme.shadows.button,
                borderRadius: theme.radius.button,
                color: decoration ? theme.textOnAccent.rgb : theme.text.rgb,
                fontWeight: 500,
                borderColor: theme.pale.rgba(0)
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
                case 'none':
                    style.background = 'none';
                    style.border = 'none';
                    style.boxShadow = 'none';
                    style.padding = 0;
                    style.color = theme.text.rgb;
                    break;
            }
            return style;
        }
    };
});
