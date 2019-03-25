import { css } from '@emotion/core';
import useTheme from '../../hooks/useTheme';

export default (mobile) => {

    const theme = useTheme().theme;
    const border = !mobile ? '1px solid ' + theme.pale.rgb : 'unset';

    return {
        container: css({
            background: theme.background2.rgb,
            borderRadius: theme.radius.card,
            overflow: 'hidden',
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
        item: (narrow) => css(
            {
                background: theme.interface.rgb,
                border: border,
                flex: 1,
                padding: '2.5rem',
            },
            narrow && {
                padding: '1.5rem 1rem',
            }
        ),
        grid: css({
            paddingTop: '.75rem',
            alignItems: 'flex-end',
            flex: 1,
            justifyContent: 'space-between'
        }),
        menu: {
            container: css(
                {
                    background: theme.interface.rgb,
                    border: border,
                    flexBasis: '18rem',
                    padding: '1.25rem',
                    overflow: 'hidden',
                    flexShrink: 1,
                    flexGrow: 0,
                },
                mobile && {
                    flex: 1,
                    padding: 0,
                }
            ),
            item: (active, groups) => css(
                {
                    cursor: 'pointer',
                    '> span': {
                        lineHeight: mobile ? '2.5rem' : '2rem'
                    }
                },
                active && {
                    background: theme.highlight.rgb,
                    color: theme.textOnAccent.rgb,
                    marginRight: '-1.25rem',
                    marginLeft: (groups && !mobile) ? '-1.75rem' : '-1.25rem',
                    paddingLeft: (groups && !mobile) ? '1.75rem' : '1.25rem'
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
            groupBody: css(
                {
                    paddingLeft: !mobile ? '.5rem' : 'unset'
                },
                mobile && {
                    '> div': {
                        borderTop: '1px solid ' + theme.pale.rgb,
                    },
                    '> div:last-of-type': {
                        borderBottom: '1px solid ' + theme.pale.rgb,
                    }
                }
            ),
        },
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
        })
    }
}
