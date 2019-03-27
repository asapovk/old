"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../../hooks/useTheme"));
exports.default = (function (mobile) {
    var theme = useTheme_1.default().theme;
    var border = !mobile ? '1px solid ' + theme.pale.rgb : 'unset';
    return {
        container: core_1.css({
            background: theme.background2.rgb,
            width: '100%',
            overflow: 'hidden'
        }, !mobile && {
            borderRadius: theme.radius.card,
        }),
        items: core_1.css({
            flex: 1,
            overflow: 'hidden'
        }, !mobile && {
            '> div:first-of-type': {
                borderTopLeftRadius: theme.radius.card,
                borderBottomLeftRadius: theme.radius.card,
            },
            '> div:last-of-type': {
                borderTopRightRadius: theme.radius.card,
                borderBottomRightRadius: theme.radius.card,
            },
            '> div:not(:first-of-type)': {
                marginLeft: '-1px'
            },
        }),
        item: function (narrow) { return core_1.css({
            background: theme.interface.rgb,
            border: border,
            padding: '2.5rem',
            overflow: 'hidden',
            flex: 1
        }, narrow && {
            padding: '2.5rem 1rem',
        }, mobile && {
            padding: 0
        }); },
        grid: core_1.css({
            paddingTop: '.75rem',
            alignItems: 'flex-end',
            flex: 1,
            justifyContent: 'space-between'
        }),
        menu: {
            container: core_1.css({
                background: theme.interface.rgb,
                border: border,
                flexBasis: '18rem',
                padding: '1.25rem',
                overflow: 'hidden',
                flexShrink: 1,
                flexGrow: 0,
            }, mobile && {
                flex: 1,
                padding: 0,
            }),
            item: function (active, groups) { return core_1.css({
                cursor: 'pointer',
                '> span': {
                    lineHeight: mobile ? '2.5rem' : '2rem'
                }
            }, active && {
                background: theme.highlight.rgb,
                color: theme.textOnAccent.rgb,
                marginRight: '-1.25rem',
                marginLeft: (groups && !mobile) ? '-1.75rem' : '-1.25rem',
                paddingLeft: (groups && !mobile) ? '1.75rem' : '1.25rem'
            }); },
            group: core_1.css({
                ':not(:first-of-type)': {
                    marginTop: '1.5rem'
                },
            }),
            groupName: core_1.css({
                color: theme.lowlight.rgb,
                marginBottom: '0.25rem'
            }),
            groupBody: core_1.css({
                paddingLeft: !mobile ? '.5rem' : 'unset'
            }, mobile && {
                '> div': {
                    borderTop: '1px solid ' + theme.pale.rgb,
                },
                '> div:last-of-type': {
                    borderBottom: '1px solid ' + theme.pale.rgb,
                }
            }),
        },
        leftBar: core_1.css({
            paddingTop: '2.5rem',
            flexBasis: '4rem',
            alignItems: 'center',
            '> *': {
                cursor: 'pointer',
                marginBottom: '1rem',
            }
        }),
        rightBar: core_1.css({
            padding: '2.5rem 1.5rem',
            flexBasis: '6rem',
            flexGrow: 0,
            alignItems: 'center',
            '> *': {
                cursor: 'pointer',
                marginBottom: '1rem',
            }
        })
    };
});
