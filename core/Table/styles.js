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
        root: core_1.css({
            overflowWrap: 'break-word',
            lineHeight: 1,
            display: 'flex',
        }),
        content: core_1.css({
            flex: 1
        }),
        headRow: core_1.css({
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            textTransform: 'uppercase',
            fontSize: '1rem',
            padding: '0.75rem 1.125px',
        }),
        headColumn: core_1.css({
            color: theme.lowlight.rgb,
            marginRight: '1.25rem',
        }),
        search: core_1.css({
            padding: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            borderColor: theme.pale.rgb,
            '> svg': {
                fontSize: '1rem',
            },
            '> input': {
                fontSize: '1rem',
                lineHeight: '1.5rem',
                appearance: 'none',
                boxSizing: 'border-box',
                resize: 'none',
                border: 'none',
                background: 'none',
                outline: 'none',
                position: 'relative',
                color: 'inherit',
                width: '100%',
                fontFamily: 'inherit',
                margin: 0,
                padding: '0 0.75rem',
                flex: 1,
            },
        }),
        body: core_1.css(__assign({ position: 'relative' }, theme.borders.table, { backgroundColor: theme.interface.rgb, boxShadow: theme.shadows.table })),
        pagination: core_1.css({
            padding: '0.3rem 0.25rem 0.25rem 0rem',
            marginTop: '3rem',
        }),
        paginationButton: function (active) { return core_1.css({
            cursor: 'pointer',
            borderRadius: '0px 0.25rem 0.25rem 0px',
            padding: '0.25rem 8px 0.25rem 0.75rem',
            fontSize: '0.75rem',
            fontWeight: 500,
            textAlign: 'right',
            marginBottom: '0.5rem',
            color: theme.text.hex,
            backgroundColor: theme.interface.hex,
            opacity: active ? 1 : 0.5,
        }); },
        row: function (edited) { return core_1.css(__assign({ display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'stretch', padding: '1.25rem', position: 'relative', ':not(:last-child)': {
                borderBottom: 'solid 0.5px',
                borderColor: theme.pale.hex,
            } }, (edited && {
            backgroundColor: theme.background.rgb,
            borderColor: theme.pale.rgb,
            borderStyle: 'solid',
            borderWidth: '0 0 0.5px 0',
            padding: '1.25rem',
            // marginTop: '-1px',
            "&:last-of-type": {
                borderRadius: "0 0 " + theme.borders.table.borderRadius + " " + theme.borders.table.borderRadius
            }
        }), { ':hover': {
                '> :last-of-type > div': {
                    display: 'flex'
                }
            } })); },
        subrow: core_1.css({
            paddingTop: '1.25rem',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            position: 'relative',
        }),
        column: core_1.css({
            marginRight: '1.25rem',
            flexShrink: 0,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }),
        more: core_1.css({
            color: theme.highlight.rgb
        }),
        actions: core_1.css({
            textTransform: 'uppercase',
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            '> svg': {
                fontSize: '2rem',
                alignSelf: 'center',
            },
        }),
        actionButtons: core_1.css({
            flexDirection: 'row',
            alignItems: 'center',
            display: 'none',
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            paddingLeft: '1.25rem',
            background: "linear-gradient(90deg, " + theme.interface.rgb + " 0%, " + theme.interface.rgb + " 20%)",
            '> div': {
                marginLeft: '1rem',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                fontWeight: 500,
                boxShadow: 'none',
            }
        }),
        actionButtonsEdit: core_1.css({
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        })
    };
});
