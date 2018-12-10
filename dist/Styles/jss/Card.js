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
        main: function (active) {
            var style = {
                background: theme.interface.rgb,
                boxShadow: theme.shadows.card,
                borderRadius: theme.radius.card,
                color: theme.text.rgb,
                border: "1px solid",
                borderColor: theme.pale.rgba(1)
            };
            if (active) {
                style = __assign({}, style, { background: "linear-gradient(80deg," + theme.gradient.card[0] + "," + theme.gradient.card[1] + ")", border: 'none', color: style.background, borderColor: theme.pale.rgba(0) });
            }
            return style;
        },
    };
});
