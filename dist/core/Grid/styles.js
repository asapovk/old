"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function (_a) {
    var gridTemplateColumns = _a.gridTemplateColumns;
    var theme = useTheme_1.default().theme;
    return {
        wrapper: core_1.css({
            position: 'relative',
            borderRadius: theme.radius.table,
            borderWidth: theme.borders.table.width,
            borderStyle: theme.borders.table.style,
            borderColor: theme.borders.table.color,
        }),
        container: core_1.css({
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: gridTemplateColumns,
        }),
        noDataContainer: core_1.css({
            padding: '1.25rem',
            textAlign: 'center'
        })
    };
});
exports.rowStyles = function () {
    var theme = useTheme_1.default().theme;
    return {
        rowWrapper: core_1.css({
            display: 'contents',
            ':last-of-type': {
                "> div": {
                    borderBottomWidth: 0,
                    borderRadius: '0 0 .5rem .5rem',
                    ':first-of-type': {
                        "> div": {
                            borderBottomWidth: 0,
                        }
                    },
                }
            }
        }),
        rowCellsWrapper: function (_a) {
            var expandForm = _a.expandForm;
            return core_1.css({
                display: 'contents',
            }, expandForm && {
                ':last-of-type': {
                    "> div": {
                        borderBottomWidth: 0,
                    }
                }
            });
        },
        rowCell: function (_a) {
            var borders = _a.borders, alignment = _a.alignment, expanded = _a.expanded, expandForm = _a.expandForm;
            return core_1.css({
                display: 'flex',
                alignItems: 'center',
                padding: '1.25rem',
                overflow: 'hidden',
                borderStyle: 'solid',
                borderColor: theme.pale.hex,
                borderWidth: exports.getBorders(borders),
                justifyContent: alignment,
                fontSize: '1rem',
                lineHeight: '1rem'
            }, expanded && {
                borderBottom: 0
            }, expandForm && {
                cursor: 'pointer'
            });
        },
        expandForm: function (_a) {
            var expanded = _a.expanded, columnsLength = _a.columnsLength;
            return core_1.css({
                display: 'none',
                gridColumn: "span " + columnsLength,
                backgroundColor: theme.background2.hex,
                padding: '1.25rem',
                borderStyle: 'solid',
                borderColor: theme.pale.hex,
                borderWidth: '1px 0',
            }, expanded && {
                display: 'block'
            });
        },
        icon: function (_a) {
            var expanded = _a.expanded;
            return core_1.css({
                transition: 'all .15s ease-in-out',
                transform: 'rotate(0)'
            }, expanded && {
                transform: 'rotate(90deg)'
            });
        }
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
            borderColor: theme.borders.table.color,
            borderStyle: theme.borders.table.style,
            borderWidth: '1px 0 0 0',
            userSelect: 'none'
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
        }); }
    };
};
exports.headerStyles = function () {
    var theme = useTheme_1.default().theme;
    return {
        headerWrapper: core_1.css({
            display: 'contents',
            '> div': {
                ':first-of-type': {
                    borderRadius: '8px 0 0 0'
                },
                ':last-of-type': {
                    borderRadius: '0 8px 0 0'
                }
            }
        }),
        headerCell: function (_a) {
            var borders = _a.borders, alignment = _a.alignment;
            return core_1.css({
                display: 'flex',
                alignItems: 'center',
                position: 'sticky',
                top: 0,
                backgroundColor: theme.background.hex,
                padding: '1.25rem',
                overflow: 'hidden',
                borderStyle: 'solid',
                borderColor: theme.pale.hex,
                justifyContent: alignment,
                borderWidth: exports.getBorders(borders),
                zIndex: 1,
                fontSize: '0.875rem',
                color: theme.lowlight.hex,
                fontWeight: 600,
                lineHeight: '1rem'
            });
        },
    };
};
exports.subHeaderStyles = function (_a) {
    var columnsLength = _a.columnsLength, hideHeaders = _a.hideHeaders;
    var theme = useTheme_1.default().theme;
    return {
        subheader: core_1.css({
            gridColumn: "span " + columnsLength,
            backgroundColor: theme.background2.hex,
            padding: '.5rem 1.25rem',
            borderStyle: 'solid',
            borderColor: theme.pale.hex,
            borderWidth: '0 0 1px 0',
            position: 'sticky',
            top: hideHeaders ? 0 : 'calc(3.5rem + 1px)',
            boxSizing: 'border-box',
            zIndex: 1,
            fontSize: '0.875rem',
            color: theme.lowlight.hex,
            lineHeight: '1rem'
        }),
    };
};
exports.getBorders = function (borders) {
    var borderWidth = '0 0 1px 0';
    switch (borders) {
        case 'all':
            borderWidth = '0 1px 1px 1px';
            break;
        case 'left':
            borderWidth = '0 0 1px 1px';
            break;
        case 'right':
            borderWidth = '0 1px 1px 0';
            break;
        case 'none':
            borderWidth = '0';
            break;
    }
    return borderWidth;
};
