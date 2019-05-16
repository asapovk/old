"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * styles.tsx
 * author: I.Trikoz
 */
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function (params) {
    var theme = useTheme_1.default().theme;
    var rowsHeight = (params.rowsCount * 1.75 - 0.5) || 0;
    var containerHeight = rowsHeight + (params.hasTitle ? 3 : 0) || 0;
    return core_1.css({
        width: '100%',
        overflowY: 'hidden',
        height: "calc(" + containerHeight + "rem + 1px)",
        '> div': {
            position: 'relative',
            width: '100%',
            overflowX: 'auto',
            overflowY: 'hidden',
            height: "calc(" + rowsHeight + "rem + 22px)",
            '> div': {
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }
        },
        '> span': {
            fontSize: '0.875rem',
            lineHeight: '1rem',
            display: 'inline-block',
            color: theme.lowlight.hex,
            width: '100%',
            paddingBottom: '0.75rem',
            marginBottom: '0.75rem',
            borderBottom: "1px dashed " + theme.lowlight.rgba(.2),
        }
    });
});
