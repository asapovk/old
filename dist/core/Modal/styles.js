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
exports.default = (function (props) {
    var theme = useTheme_1.default().theme;
    var visible = props.visible, center = props.center, fullSize = props.fullSize;
    return {
        overlay: core_1.css({
            opacity: visible ? 1 : 0,
            zIndex: 500,
            position: 'fixed',
            width: "100%",
            height: "100%",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,.5)",
            display: center ? "flex" : "block",
            justifyContent: "center",
            alignItems: "center",
            overflowY: 'auto',
            backdropFilter: "blur(4px)",
            transition: 'opacity 0.25s',
            backfaceVisibility: "hidden",
        }),
        window: core_1.css(__assign({ opacity: visible ? 1 : 0, zIndex: 500, backgroundColor: theme.interface.hex, minHeight: '1rem', minWidth: '15rem', maxWidth: '40rem', padding: '2.25rem', margin: '0 auto' }, theme.borders.modal, { borderRadius: center ? theme.borders.modal.borderRadius : 0, transition: 'all 0.5s', transform: visible ? 'translateY(0)' : 'translateY(-20px)', boxSizing: 'border-box' }), (center && fullSize) && {
            width: '40rem'
        }),
        header: core_1.css({
            marginTop: '-0.5rem',
        }),
        cross: core_1.css({
            // marginTop: '0.25rem',
            marginLeft: '2rem',
            cursor: 'pointer',
            transition: 'all 0.25s',
            transform: "scale(1)",
            opacity: .7,
            ':hover': {
                transform: "scale(1.1)"
            },
            ':active': {
                transform: "scale(1)"
            }
        })
    };
});
