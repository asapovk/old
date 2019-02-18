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
var core_1 = require("@emotion/core");
var hooks_1 = require("../../hooks");
exports.default = (function (multiline, size, disabled, decoration) {
    var theme = hooks_1.useTheme().theme;
    var typography = hooks_1.useTypography();
    var sizes = getSizes(size, decoration);
    return {
        container: core_1.css({
            flex: 1,
            cursor: 'default'
        }, disabled && {
            opacity: .5
        }),
        label: core_1.css(__assign({}, typography.caption[sizes.labelSize], { 
            // textTransform: 'uppercase',
            marginBottom: '0.25rem', color: theme.lowlight.rgb })),
        wrapper: core_1.css({
            border: '1px solid ' + theme.pale.hex,
            backgroundColor: theme.interface.rgb,
            borderRadius: theme.radius.default,
            overflow: 'hidden'
        }, decoration === 'borderBottom' && {
            border: 'none',
            borderBottom: '1px solid ' + theme.pale.hex,
            backgroundColor: 'none'
        }, decoration === 'borderless' && {
            border: 'none'
        }, multiline
            ? {
                height: '100%',
                padding: sizes.textareaPadding
            }
            : {
                height: sizes.inputHeight,
                padding: sizes.inputPadding
            }),
        field: core_1.css(__assign({ height: multiline ? '100%' : 'auto', width: '100%', border: 'none', boxSizing: 'border-box', background: 'none', outline: 'none', position: 'relative', color: theme.text.rgb, fontFamily: 'inherit', margin: 0, padding: 0, resize: 'none', '::placeholder': {
                color: theme.lowlight.rgb
            } }, typography.text[sizes.textSize])),
        icon: function (position) { return core_1.css({
            color: theme.lowlight.rgb,
            fontSize: sizes.iconSize,
        }, position === 'left'
            ? {
                marginRight: sizes.iconMargin
            }
            : {
                marginLeft: sizes.iconMargin
            }); },
    };
});
function getSizes(size, decoration) {
    switch (size) {
        case 'large':
            return {
                inputHeight: decoration != 'borderless'
                    ? 'calc(2.75rem - 2px)'
                    : '2.75rem',
                inputPadding: !decoration
                    ? '0 0.75rem'
                    : '0',
                textareaPadding: '0.75rem',
                iconSize: '1.25rem',
                labelSize: 2,
                textSize: 1,
                iconMargin: '0.75rem'
            };
        case 'small':
            return {
                inputHeight: decoration != 'borderless'
                    ? 'calc(1.75rem - 2px)'
                    : '1.75rem',
                inputPadding: !decoration
                    ? '0 0.5rem'
                    : '0',
                textareaPadding: '0.5rem',
                iconSize: '0.75rem',
                labelSize: 4,
                textSize: 3,
                iconMargin: '0.5rem'
            };
        default:
            return {
                inputHeight: decoration != 'borderless'
                    ? 'calc(2rem - 2px)'
                    : '2rem',
                inputPadding: !decoration
                    ? '0 0.5rem'
                    : '0',
                textareaPadding: '0.5rem',
                iconSize: '1rem',
                labelSize: 3,
                textSize: 2,
                iconMargin: '0.5rem'
            };
    }
}
