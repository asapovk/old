import { css } from '@emotion/core';
import useTheme from '../../hooks/useTheme';

export default () => {

    const theme = useTheme().theme;

    return {
        container: css({
            background: theme.background2.rgb,
            borderRadius: theme.radius.card,
            overflow: 'hidden'
        }),
        items: css({
            overflow: 'hidden',
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
        grid: css({
            paddingTop: '.75rem',
            alignItems: 'flex-end',
            flex: 1,
            overflow: 'hidden'
        }),
        item: css({
            background: theme.interface.rgb,
            border: '1px solid ' + theme.pale.rgb,
            flex: 1,
            padding: '2.5rem',
            overflow: 'hidden'
        }),
        leftBar: css({
            paddingTop: '2.5rem',
            flexBasis: '4rem',
            alignItems: 'center',
            '> *': {
                cursor: 'pointer',
                marginBottom: '1rem',
            }
        }),
        rightBar: css({
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
            container: css({
                background: theme.interface.rgb,
                border: '1px solid ' + theme.pale.rgb,
                flexBasis: '18rem',
                padding: '1.25rem'
            }),
            item: (active, groups) => css(
                {
                    cursor: 'pointer',
                    lineHeight: '2rem'
                },
                active && {
                    background: theme.highlight.rgb,
                    color: theme.textOnAccent.rgb,
                    marginRight: '-1.25rem',
                    marginLeft: groups ? '-1.75rem' : '-1.25rem',
                    paddingLeft: groups ? '1.75rem' : '1.25rem'
                }
            ),
            group: css({
                ':not(:first-of-type)': {
                    marginTop: '1.5rem'
                },
            }),
            groupName: css({
                color: theme.lowlight.rgb,
                marginBottom: '0.25rem'
            }),
            groupBody: css({
                paddingLeft: '.5rem'
            }),
        }
    }
}
