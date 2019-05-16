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
exports.default = (function (_a) {
    var multiline = _a.multiline, size = _a.size, disabled = _a.disabled, decoration = _a.decoration, floatingLabel = _a.floatingLabel, leftIcon = _a.leftIcon;
    var theme = hooks_1.useTheme().theme;
    var extraParams = getExtraParams(size, decoration, leftIcon);
    return {
        container: core_1.css({
            flex: 1,
            cursor: 'default'
        }, disabled && {
            opacity: .5
        }),
        label: core_1.css({
            fontSize: extraParams.labelSize,
            lineHeight: extraParams.labelLineHeight,
            marginBottom: '0.25rem',
            color: theme.lowlight.rgb
        }),
        floatingLabel: function (minified) { return core_1.css({
            position: 'absolute',
            pointerEvents: 'none',
            top: 0,
            left: 0,
            transition: 'all .2s ease-in-out',
            color: theme.lowlight.rgb,
            transform: "translate(" + extraParams.floatingLabelTranslate.start + ") scale(1)",
            transformOrigin: 'top left',
            fontSize: extraParams.textSize,
            lineHeight: extraParams.textLineHeight,
        }, minified && {
            color: theme.lowlight.rgb,
            transform: "translate(" + extraParams.floatingLabelTranslate.end + ") scale(0.75)",
        }); },
        wrapper: core_1.css(__assign({ backgroundColor: theme.interface.rgb, overflow: 'hidden', boxSizing: 'border-box' }, theme.borders.textfield), decoration === 'borderBottom' && {
            borderRadius: '0',
            borderWidth: '0 0 1px 0',
            backgroundColor: 'unset'
        }, decoration === 'borderless' && {
            border: 'none',
            backgroundColor: 'unset'
        }, decoration == 'none' && {
            borderRadius: '0',
            border: 'none',
            backgroundColor: 'unset'
        }, multiline
            ? {
                height: '100%',
                padding: "" + extraParams.textareaPadding
            }
            : {
                minHeight: extraParams.inputHeight,
                padding: "0 " + extraParams.inputPadding
            }),
        field: function (fullHeight, isTagsContaier) {
            if (fullHeight === void 0) { fullHeight = false; }
            if (isTagsContaier === void 0) { isTagsContaier = false; }
            return core_1.css(__assign({ 
                // height: '100%',
                width: '100%', border: 'none', boxSizing: 'border-box', background: 'none', outline: 'none', position: 'relative', color: theme.text.rgb, fontFamily: 'inherit', margin: 0, padding: 0, resize: 'none', fontWeight: 700, transform: 'translateY(0)', fontSize: extraParams.textSize, lineHeight: extraParams.textLineHeight, marginTop: floatingLabel ? extraParams.inputMargin : 0, '::placeholder': {
                    color: theme.lowlight.rgb,
                    fontWeight: 'normal'
                } }, (fullHeight && {
                height: '100%'
            }), (isTagsContaier && {
                margin: "calc(" + extraParams.iconMargin + " / 2)",
                marginLeft: "-" + extraParams.inputPadding,
                height: '100%',
            })));
        },
        tag: core_1.css(__assign({ userSelect: 'none', display: 'inline-block', padding: extraParams.tagPadding }, theme.borders.textfield, { borderRadius: "calc(" + theme.borders.textfield.borderRadius + " / 2)", borderColor: theme.highlight.rgba(.1), background: theme.highlight.rgba(.05), marginTop: "calc(" + extraParams.iconMargin + " / 2)", marginLeft: "calc(" + extraParams.iconMargin + " / 2)", fontWeight: 'normal' })),
        icon: function (position) {
            if (position === void 0) { position = null; }
            return core_1.css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.lowlight.rgb,
                fontSize: extraParams.iconSize,
                userSelect: 'none',
            }, !position
                ? { fontSize: extraParams.loadingSize }
                : position === 'left'
                    ? { marginRight: extraParams.iconMargin }
                    : { marginLeft: extraParams.iconMargin });
        },
        rightLabel: core_1.css({
            userSelect: 'none',
            color: theme.lowlight.rgba(0.5),
            fontWeight: 400,
            fontSize: extraParams.textSize,
            lineHeight: extraParams.textLineHeight,
        })
    };
});
function getExtraParams(size, decoration, leftIcon) {
    var withoutDecoration = decoration === 'none';
    switch (size) {
        case 'extra-large':
            return {
                inputHeight: '5rem',
                inputPadding: withoutDecoration ? '0' : '1.25rem',
                textareaPadding: '1.75rem 1.25rem',
                iconSize: '2rem',
                loadingSize: '1.5rem',
                labelSize: '1rem',
                labelLineHeight: '1.25rem',
                textSize: '1.125rem',
                textLineHeight: '1.5rem',
                iconMargin: '1rem',
                inputMargin: '0.75rem',
                floatingLabelTranslate: {
                    start: "calc(" + (withoutDecoration ? '0px' : '1.25rem') + " + " + (leftIcon ? '2.5rem' : '0px') + "), 1.75rem",
                    end: "calc(" + (withoutDecoration ? '0px' : '1.25rem') + " + " + (leftIcon ? '2.5rem' : '0px') + "), 0.75rem",
                },
                tagPadding: '1rem 1rem',
            };
        case 'large':
            return {
                inputHeight: '2.75rem',
                inputPadding: withoutDecoration ? '0' : '0.75rem',
                textareaPadding: '0.5rem 0.75rem',
                iconSize: '1.25rem',
                loadingSize: '1.25rem',
                labelSize: '0.875rem',
                labelLineHeight: '1rem',
                textSize: '1rem',
                textLineHeight: '1.5rem',
                iconMargin: '0.75rem',
                inputMargin: '0.75rem',
                floatingLabelTranslate: {
                    start: "calc(" + (withoutDecoration ? '0px' : '0.75rem') + " + " + (leftIcon ? '1.75rem' : '0px') + "), 0.5rem",
                    end: "calc(" + (withoutDecoration ? '0px' : '0.75rem') + " + " + (leftIcon ? '1.75rem' : '0px') + "), 0rem",
                },
                tagPadding: '0.125rem 0.5rem',
            };
        case 'small':
            return {
                inputHeight: '1.75rem',
                inputPadding: withoutDecoration ? '0' : '0.5rem',
                textareaPadding: '0.5rem',
                iconSize: '0.75rem',
                loadingSize: '0.75rem',
                labelSize: '0.625rem',
                labelLineHeight: '0.75rem',
                textSize: '0.75rem',
                textLineHeight: '1rem',
                iconMargin: '0.5rem',
                inputMargin: '0.25rem',
                floatingLabelTranslate: {
                    start: (withoutDecoration ? '0px' : '1.25rem') + ", 1.75rem",
                    end: (withoutDecoration ? '0px' : '1.25rem') + ", 1.75rem",
                },
                tagPadding: '0rem 0.25rem',
            };
        default:
            return {
                inputHeight: '2rem',
                inputPadding: withoutDecoration ? '0' : '0.5rem',
                textareaPadding: '0.5rem',
                iconSize: '1rem',
                loadingSize: '1rem',
                labelSize: '0.75rem',
                labelLineHeight: '0.875rem',
                textSize: '0.875rem',
                textLineHeight: '1.25rem',
                iconMargin: '0.5rem',
                inputMargin: '0.25rem',
                floatingLabelTranslate: {
                    start: (withoutDecoration ? '0px' : '1.25rem') + ", 1.75rem",
                    end: (withoutDecoration ? '0px' : '1.25rem') + ", 1.75rem",
                },
                tagPadding: '0rem 0.25rem',
            };
    }
}
