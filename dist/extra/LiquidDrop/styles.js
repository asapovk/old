"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var hooks_1 = require("../../hooks");
exports.default = (function () {
    var theme = hooks_1.useTheme().theme;
    return {
        title: core_1.css({
            pointerEvents: 'none',
            userSelect: 'none',
            position: "absolute",
            right: 39,
            top: 16,
            height: 40,
            width: 40,
            textAlign: 'center',
            color: theme.textOnAccent.hex
        }),
        contentWrapper: core_1.css({
            position: 'absolute',
            height: 318,
            width: 320,
            top: 67,
            right: 29,
            borderRadius: 5,
            overflow: 'hidden'
        }),
        content: core_1.css({
            paddingLeft: '1.25rem',
        }),
        dot: core_1.css({
            display: 'inline-block',
            borderRadius: '1.75rem',
            height: '0.625rem',
            width: '0.625rem',
            background: theme.highlight.hex,
            marginRight: '0.25rem'
        }),
        row: function (active) { return core_1.css({
            cursor: 'pointer',
            border: 0,
            paddingTop: '1.25rem',
            paddingBottom: '1.25rem',
            borderBottomWidth: 1,
            borderColor: theme.pale.hex,
            borderStyle: 'solid',
            transition: active ? '0.15s' : '0.05s',
            transitionDelay: active ? '0.15s' : '0',
            transform: "translateY(" + (!active ? '30px' : '0px') + ") scale(" + (!active ? '0.7' : '1') + ")",
            transformOrigin: '0 0',
            opacity: active ? 1 : 0,
            visibility: active ? 'visible' : 'hidden',
        }); }
    };
});
