"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (theme) {
    return {
        main: function (decoration) {
            var background = theme.interface.rgb;
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
            }
            if (decoration === 'none')
                return {
                    background: 'none',
                    padding: 0,
                    color: theme.text.rgb,
                    border: 'none'
                };
            else
                return {
                    background: background,
                    boxShadow: '0px 2px 6px 0px ' + theme.shadow.rgb,
                    borderRadius: theme.corner,
                    color: decoration ? theme.textOnAccent.rgb : theme.text.rgb,
                    borderColor: decoration ? theme.pale.rgba(0) : theme.pale.rgb
                };
        }
    };
});
