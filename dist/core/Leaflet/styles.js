"use strict";
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
            background: theme.background2.rgb,
            borderRadius: theme.radius.card
        }),
        items: core_1.css({
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
        item: core_1.css({
            background: theme.interface.rgb,
            border: '1px solid ' + theme.pale.rgb,
            flex: 1,
            padding: '2.5rem'
        }),
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
        }),
        menu: {
            container: core_1.css({
                background: theme.interface.rgb,
                border: '1px solid ' + theme.pale.rgb,
                flexBasis: '18rem',
                padding: '1.25rem'
            }),
            item: function (active, groups) { return core_1.css({
                cursor: 'pointer'
            }, active && {
                background: theme.highlight.rgb,
                color: theme.textOnAccent.rgb,
                marginRight: '-1.25rem',
                marginLeft: groups ? '-2rem' : '-1.25rem',
                paddingLeft: groups ? '2rem' : '1.25rem'
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
                paddingLeft: '.75rem'
            }),
        }
    };
});
