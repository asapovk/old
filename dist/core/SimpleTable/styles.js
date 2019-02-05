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
exports.default = (function () {
    var theme = useTheme_1.default().theme;
    return {
        container: core_1.css({
            borderRadius: theme.radius.table,
            borderWidth: theme.borders.table.width,
            borderStyle: theme.borders.table.style,
            borderColor: theme.borders.table.color,
            overflow: 'hidden',
            boxSizing: 'border-box'
        }),
        head: {
            cell: function (width, borders) { return core_1.css(width
                ? { flexBasis: width }
                : { flex: 1 }, __assign({ padding: '1.25rem', overflow: 'hidden', borderColor: theme.borders.table.color, borderStyle: theme.borders.table.style }, getBorders(borders))); },
            row: core_1.css({
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#908E91',
                borderStyle: theme.borders.table.style,
                borderWidth: '0 0 1px 0',
                borderColor: theme.borders.table.color,
            })
        },
        group: {
            container: core_1.css({
                backgroundColor: '#F2F0F5',
                borderStyle: theme.borders.table.style,
                borderWidth: '0 0 1px 0',
                borderColor: theme.borders.table.color,
            }),
            title: core_1.css({
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '1.25rem',
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
            }),
            cell: function (width, borders) { return core_1.css(width
                ? { flexBasis: width }
                : { flex: 1 }, __assign({ padding: '1.25rem', overflow: 'hidden', borderColor: theme.borders.table.color, borderStyle: theme.borders.table.style }, getBorders(borders))); }
        },
        data: {
            group: core_1.css({
                backgroundColor: '#F2F0F5',
                borderStyle: theme.borders.table.style,
                borderWidth: '0 0 1px 0',
                borderColor: theme.borders.table.color,
                padding: '1.25rem',
            }),
            row: core_1.css({
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                borderStyle: theme.borders.table.style,
                borderWidth: '0 0 1px 0',
                borderColor: theme.borders.table.color
            }),
            cell: function (width, borders) { return core_1.css(width
                ? { flexBasis: width }
                : { flex: 1 }, __assign({ padding: '1.25rem', overflow: 'hidden', borderColor: theme.borders.table.color, borderStyle: theme.borders.table.style }, getBorders(borders))); }
        },
        pagination: {
            container: core_1.css({
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem'
            }),
            button: function (active) { return core_1.css({
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                borderColor: theme.borders.table.color,
                borderStyle: theme.borders.table.style,
                borderWidth: '1px',
                borderRadius: '0.25rem',
                width: '2rem',
                height: '2rem',
                margin: '0 0.25rem',
                cursor: 'pointer',
                color: theme.lowlight.hex,
                transition: 'all .25s ease-in-out'
            }, active && {
                borderColor: theme.highlight.hex,
                color: theme.highlight.hex
            }); }
        }
    };
});
function getBorders(borders) {
    switch (borders) {
        case 'all':
            return {
                borderWidth: '0 1px'
            };
        case 'left':
            return {
                borderWidth: '0 0 0 1px'
            };
        case 'right':
            return {
                borderWidth: '0 1px 0 0'
            };
        default:
            return {
                borderWidth: 0
            };
    }
}
