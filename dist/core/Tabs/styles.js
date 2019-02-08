"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function (_a) {
    var reverseContainer = _a.reverseContainer;
    var theme = useTheme_1.default().theme;
    return {
        container: core_1.css({
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '2rem'
        }, reverseContainer && {
            flexDirection: 'row-reverse'
        }),
        menu: core_1.css({
            display: 'flex',
            flexBasis: '20rem',
            flexShrink: 0,
            flexWrap: 'wrap',
            boxSizing: 'border-box',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: theme.borders.table.color,
            borderRadius: '0.25rem',
            position: 'sticky',
            top: 0,
            margin: '0 0 0 2.5rem',
            padding: '0 1.25rem',
        }, reverseContainer && {
            margin: '0 2.5rem 0 0'
        }),
        menuItem: function (activeItem) { return core_1.css({
            display: 'block',
            width: '100%',
            boxSizing: 'border-box',
            cursor: 'pointer',
            borderWidth: '0 0 1px 0',
            borderColor: theme.borders.table.color,
            borderStyle: 'solid',
            padding: '1.25rem 0',
            "&:last-child": {
                borderWidth: '0',
            }
        }, activeItem && {
            color: theme.highlight.hex
        }); },
        content: core_1.css({
            display: 'flex',
            flex: 1,
            flexWrap: 'wrap',
        }),
        tab: core_1.css({
            display: 'block',
            width: '100%',
            boxSizing: 'border-box',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: theme.borders.table.color,
            borderRadius: '0.25rem',
            padding: '1.25rem',
            marginBottom: '1.25rem',
            height: '300px'
        })
    };
});