"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function () { return ({
    wrapper: core_1.css({
        position: 'relative',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 6px 0 rgba(32,33,36,0.28)',
    }),
    container: core_1.css({
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
    }),
    noDataContainer: core_1.css({
        padding: '1.25rem',
        textAlign: 'center'
    })
}); });
exports.rowStyles = function (_a) {
    var expanded = _a.expanded, withOpacity = _a.withOpacity;
    var theme = useTheme_1.default().theme;
    return {
        rowWrapper: core_1.css({
            overflow: 'hidden',
            boxSizing: 'border-box',
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            backgroundColor: theme.background.hex,
            borderWidth: '0 0 1px 0',
            borderStyle: 'solid',
            borderColor: theme.pale.hex,
            ':last-of-type': {
                borderWidth: 0,
                borderRadius: '0 0 .5rem .5rem',
            }
        }, expanded && {
            // boxShadow: '0 1px 6px 0 rgba(32,33,36,0.28)', //google shadow
            borderWidth: '0',
            margin: '0 -0.75rem -2px -0.75rem',
            borderRadius: '0.5rem',
            zIndex: 6,
            boxShadow: '0 2px 16px 0 rgba(0,0,0,.25)',
            ':last-of-type': {
                borderRadius: '.5rem'
            }
        }, withOpacity && {
            opacity: .5
        }),
        rowCellsWrapper: core_1.css({
            display: 'flex',
            flex: 1,
        }, expanded && {
            padding: '0 0.75rem'
        }),
        rowCell: function (_a) {
            var isAction = _a.isAction, borders = _a.borders, alignment = _a.alignment, width = _a.width;
            return core_1.css({
                display: 'flex',
                boxSizing: 'border-box',
                alignItems: 'center',
                padding: '1.25rem',
                overflow: 'hidden',
                justifyContent: alignment,
                fontSize: '1rem',
                borderStyle: 'solid',
                borderColor: theme.pale.hex,
                borderWidth: exports.getBorders(borders),
                flexGrow: width ? 0 : 1,
                flexShrink: 1,
                flexBasis: width ? width + 'px' : 0,
            }, isAction && {
                justifyContent: 'flex-start',
                padding: '0'
            });
        },
        expandForm: core_1.css({
            display: 'none',
            paddingBottom: '1.25rem',
            backgroundColor: theme.background.hex,
        }, expanded && {
            display: 'block',
        }),
        icon: core_1.css({
            transition: 'all .15s ease-in-out',
            transform: 'rotate(0)',
            cursor: 'pointer'
        }, expanded && {
            transform: 'rotate(90deg)'
        })
    };
};
exports.paginationStyles = function () {
    var theme = useTheme_1.default().theme;
    return {
        paginationContainer: core_1.css({
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
            userSelect: 'none'
        }),
        paginationButton: function (active) { return core_1.css({
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            borderColor: theme.pale.hex,
            borderStyle: 'solid',
            borderWidth: '1px',
            borderRadius: '0.5rem',
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
    };
};
exports.headerStyles = function () {
    var theme = useTheme_1.default().theme;
    return {
        headerWrapper: core_1.css({
            display: 'flex',
            flex: 1,
            top: 0,
            position: 'sticky',
            zIndex: 1,
            borderStyle: 'solid',
            borderColor: theme.pale.hex,
            borderWidth: '0 0 1px 0',
            borderRadius: '0.5rem 0.5rem 0 0',
            backgroundColor: theme.background.hex,
        }),
        headerCell: function (_a) {
            var isAction = _a.isAction, borders = _a.borders, alignment = _a.alignment, width = _a.width;
            return core_1.css({
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                padding: '1.25rem',
                overflow: 'hidden',
                justifyContent: alignment,
                fontSize: '0.875rem',
                color: theme.lowlight.hex,
                borderStyle: 'solid',
                borderColor: theme.pale.hex,
                borderWidth: exports.getBorders(borders),
                fontWeight: 600,
                lineHeight: '1rem',
                flexGrow: width ? 0 : 1,
                flexShrink: 1,
                flexBasis: width ? width + 'px' : 0,
            }, isAction && {
                padding: 0
            });
        },
    };
};
exports.subHeaderStyles = function (_a) {
    var hideHeaders = _a.hideHeaders;
    var theme = useTheme_1.default().theme;
    return {
        subheader: core_1.css({
            backgroundColor: theme.background2.hex,
            padding: '0.5rem 1.25rem',
            borderStyle: 'solid',
            borderColor: theme.pale.hex,
            borderWidth: '0 0 1px 0',
            position: 'sticky',
            top: 'calc(3.5rem + 1px)',
            boxSizing: 'border-box',
            zIndex: 1,
            fontSize: '0.875rem',
            color: theme.lowlight.hex,
            lineHeight: '1rem'
        }, hideHeaders && {
            top: 0,
            ":first-of-type": {
                borderRadius: '.5rem .5rem 0 0'
            }
        }),
    };
};
exports.getBorders = function (borders) {
    var borderWidth = '0';
    switch (borders) {
        case 'all':
            borderWidth = '0 1px';
            break;
        case 'left':
            borderWidth = '0 0 0 1px';
            break;
        case 'right':
            borderWidth = '0 1px 0 0';
            break;
        case 'none':
            borderWidth = '0';
            break;
    }
    return borderWidth;
};
