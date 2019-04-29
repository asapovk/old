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
            borderRadius: theme.defaultBorderRadius,
        }),
        items: core_1.css({
            flex: 1,
            overflow: 'hidden',
            borderRadius: theme.defaultBorderRadius,
            border: border,
            '> div:last-of-type': {
                borderRight: 'none'
            },
        }, mobile && {
            border: 'none',
            borderRadius: 'none'
        }),
        item: {
            container: function (narrow) { return core_1.css({
                background: theme.interface.rgb,
                padding: '2.5rem',
                flex: '1 1 auto',
                minWidth: 0,
                borderRight: '1px solid ' + theme.pale.rgb
            }, narrow && {
                padding: '2.5rem 1rem',
            }, mobile && {
                padding: 0
            }); },
            grid: core_1.css({
                paddingTop: '.75rem',
                alignItems: 'flex-end',
                flex: '0 0 initial',
                minWidth: 'max-content',
                justifyContent: 'space-between'
            }),
            header: function (index) { return core_1.css({
                position: 'relative',
                height: '1.5rem',
                marginBottom: '0.5rem',
                '> div': {
                    position: 'absolute',
                    right: '0',
                    left: '0'
                }
            }, index > 0 && {
                marginTop: '2.5rem'
            }); },
        },
        menu: {
            container: function (side, left) { return core_1.css({
                background: theme.interface.rgb,
                flexBasis: '18rem',
                width: '18rem',
                padding: '1.25rem',
                overflow: 'hidden',
                flexShrink: 1,
                flexGrow: 0,
                borderRight: '1px solid ' + theme.pale.rgb
            }, mobile && {
                flex: 1,
                padding: 0,
                '> div:last-of-type': {
                    borderBottom: '1px solid ' + theme.pale.rgb,
                }
            }, side && {
                position: 'absolute',
                right: 0,
                bottom: 0,
                top: 0,
                borderRight: 'none',
                borderLeft: '1px solid ' + theme.pale.rgb
            }, left === false && !side && {
                flexBasis: 0,
                padding: '1.25rem 0',
                overflow: 'hidden',
                border: 'none',
                '> *': {
                    width: '18rem',
                    flexShrink: 0
                }
            }); },
            item: function (active, groups) { return core_1.css({
                cursor: 'pointer',
                '> div': {
                    overflow: 'hidden',
                    '> span': {
                        lineHeight: mobile ? '2.5rem' : '2rem',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }
                }
            }, active && {
                background: theme.highlight.rgb,
                color: theme.textOnAccent.rgb,
                marginRight: '-1.25rem',
                marginLeft: (groups && !mobile) ? '-1.75rem' : '-1.25rem',
                padding: (groups && !mobile) ? '0 1.25rem 0 1.75rem' : '0 1.25rem'
            }, mobile && {
                borderTop: '1px solid ' + theme.pale.rgb
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
