"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function (props) {
    var theme = useTheme_1.default().theme;
    var visible = props.visible, center = props.center;
    return {
        overlay: core_1.css({
            visibility: visible ? 'visible' : 'hidden',
            opacity: visible ? 1 : 0,
            zIndex: 500,
            position: 'fixed',
            width: "100%",
            height: "100%",
            backgroundColor: theme.text.rgba(0.2),
            display: center ? "flex" : "block",
            justifyContent: "center",
            alignItems: "center",
            overflowY: 'auto',
        }),
        window: core_1.css({
            visibility: visible ? 'visible' : 'hidden',
            opacity: visible ? 1 : 0,
            zIndex: 500,
            backgroundColor: theme.interface.hex,
            minHeight: '10rem',
            minWidth: '15rem',
            maxWidth: '40rem',
            padding: '1.25rem',
            margin: '0 auto',
        }),
        header: core_1.css({
            marginTop: '-0.5rem',
        }),
        title: core_1.css({}),
        subtitle: core_1.css({}),
    };
});
