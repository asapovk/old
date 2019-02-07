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
        tableContainer: core_1.css({
            borderRadius: theme.radius.table,
            borderWidth: theme.borders.table.width,
            borderStyle: theme.borders.table.style,
            borderColor: theme.borders.table.color,
            overflow: 'hidden',
        }),
        rowContainer: core_1.css({
            position: 'relative',
            transition: 'all .25s ease',
            flex: 1
        }),
        rowsContainer: core_1.css({
            flex: 1,
            "> :last-child": {
                "> :first-of-type": {
                    borderWidth: 0
                }
            }
        }),
        row: function (header) { return core_1.css({
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            backgroundColor: theme.background.hex,
            borderWidth: '0 0 1px 0',
            borderStyle: theme.borders.table.style,
            borderColor: theme.borders.table.color
        }, header && {
            backgroundColor: theme.background.rgba(0),
            borderWidth: 0,
            color: '#908E91',
            fontWeight: 600,
            fontSize: '0.875rem',
            alignItems: 'center'
        }); },
        cell: function (width, borders, columnAlignment) { return core_1.css(width
            ? { flexBasis: width }
            : { flex: 1 }, __assign({ padding: '1.25rem', overflow: 'hidden', borderColor: theme.borders.table.color, borderStyle: theme.borders.table.style }, getBorders(borders), { textAlign: columnAlignment || 'left' })); },
        actionIcon: function (active) { return core_1.css({
            transform: 'rotate(0)',
            willChange: 'transform',
            transition: 'all .2s ease-in-out',
            color: theme.background2.hex,
        }, active && {
            transform: 'rotate(90deg)',
        }); },
        expandRow: function (active) { return core_1.css({
            opacity: 0,
            padding: '1.25rem',
            transition: 'all 0.2s ease-in-out',
            borderWidth: '0 0 1px 0',
            borderStyle: theme.borders.table.style,
            borderColor: theme.borders.table.color,
            backgroundColor: theme.background2.hex,
            visibility: 'hidden'
        }, active && {
            visibility: 'visible',
            opacity: 1
        }); },
        groupRowContainer: core_1.css({
            position: 'relative',
            backgroundColor: theme.background2.hex,
            borderWidth: '1px 0 1px 0',
            borderStyle: theme.borders.table.style,
            borderColor: theme.borders.table.color,
        }),
        groupTitle: core_1.css({
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '1.25rem',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        }),
        // group: {
        //     container: css({
        //         backgroundColor: '#F2F0F5',
        //         borderStyle: theme.borders.table.style,
        //         borderWidth: '0 0 1px 0',
        //         borderColor: theme.borders.table.color,
        //     })
        // },
        paginationContainer: core_1.css({
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
            borderColor: theme.borders.table.color,
            borderStyle: theme.borders.table.style,
            borderWidth: '1px 0 0 0',
        }),
        paginationButton: function (active) { return core_1.css({
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
        }); },
        noDataContainer: core_1.css({
            padding: '1.25rem',
            textAlign: 'center'
        })
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
