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
exports.default = (function (checked, isRadio, uppercase, size) {
    var theme = useTheme_1.default().theme;
    return {
        container: core_1.css({
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            color: theme.text.rgb
        }),
        input: core_1.css(__assign({}, getSize(size).input, { boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", color: theme.highlight.hex, backgroundColor: theme.background2.hex }, theme.borders.checkbox, { "> svg": {
                width: "100%",
                height: "100%"
            }, "> div": {
                boxSizing: "border-box",
                height: "100%",
                width: "100%",
                borderRadius: "50%",
                borderWidth: "0.25rem",
                borderStyle: "solid",
                borderColor: theme.background2.hex,
                background: theme.highlight.hex,
            } }), checked && {
        // borderColor: theme.highlight.rgba(0.5),
        }, isRadio && {
            borderRadius: "50%"
        }),
        label: function (labelColor) { return core_1.css({
            marginLeft: "0.5rem",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            userSelect: "none",
            color: theme[labelColor] ? theme[labelColor].hex : theme.text.hex
        }, uppercase && {
            textTransform: "uppercase"
        }); },
    };
});
function getSize(size) {
    switch (size) {
        case "extra-large": {
            return {
                input: {
                    width: "2rem",
                    height: "2rem"
                }
            };
        }
        case "large": {
            return {
                input: {
                    width: "1.5rem",
                    height: "1.5rem"
                }
            };
        }
        case "small": {
            return {
                input: {
                    width: "0.75rem",
                    height: "0.75rem"
                }
            };
        }
        default: {
            return {
                input: {
                    width: "1rem",
                    height: "1rem"
                }
            };
        }
    }
}
