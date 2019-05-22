"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var hooks_1 = require("../../hooks");
exports.default = (function () {
    var theme = hooks_1.useTheme().theme;
    return {
        conatiner: core_1.css({
            position: 'relative',
            minWidth: '4rem',
            height: 'calc(1rem + 4px)',
            cursor: 'pointer',
        }),
        rail: core_1.css({
            position: 'absolute',
            top: 'calc(50% - 2px)',
            height: '4px',
            background: theme.pale.rgb,
            width: '100%',
            zIndex: 1,
            borderRadius: '2px',
        }),
        track: core_1.css({
            position: 'absolute',
            top: 'calc(50% - 2px)',
            height: '4px',
            background: theme.highlight.rgb,
            zIndex: 2,
            borderRadius: '2px',
        }),
        handle: core_1.css({
            position: 'absolute',
            width: '1rem',
            height: '1rem',
            borderRadius: '1rem',
            marginLeft: 'calc(-.5rem - 2px)',
            background: theme.interface.rgb,
            borderColor: theme.borders.button.borderColor,
            borderStyle: theme.borders.button.borderStyle,
            borderWidth: theme.borders.button.borderWidth,
            boxShadow: theme.shadows.button.default,
            border: "2px solid " + theme.highlight.rgb,
            zIndex: 3,
        }),
    };
});
