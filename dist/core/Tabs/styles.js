"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function (bp) {
    var theme = useTheme_1.default().theme;
    var breakpoints = bp ? bp : [414, 768, 1024];
    var mq = breakpoints.map(function (bp) { return "@media (max-width: " + bp + "px)"; });
    return {
        menu: {
            elementContainer: core_1.css({
                ":not(:last-child)": {
                    ":after": {
                        content: "'\u2022'",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 1rem',
                        fontSize: '1.75rem',
                        color: theme.highlight.rgba(.5),
                    }
                }
            }),
            itemContent: function (props) { return core_1.css({
                alignItems: 'center',
                fontSize: '1.375rem',
                fontWeight: 'normal',
                textTransform: 'uppercase',
                color: theme.highlight.hex,
                cursor: 'pointer',
                lineHeight: '2.5rem',
                transition: 'font-size .15s linear',
                willChange: 'font-size',
            }, props.isActive && {
                fontSize: '2.75rem',
                fontWeight: 900,
                color: theme.text.hex
            }); }
        }
    };
});
