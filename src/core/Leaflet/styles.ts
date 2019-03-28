import { css } from '@emotion/core';
import useTheme from '../../hooks/useTheme';

export default (mobile) => {

    const theme = useTheme().theme;
    const border = !mobile ? '1px solid ' + theme.pale.rgb : 'unset';

    return {
        container: css(
            {
                background: theme.background2.rgb,
                width: '100%',
                overflow: 'hidden'
            },
            !mobile && {
                borderRadius: theme.radius.card,
            }
        ),
        items: css(
            {
                flex: 1,
                overflow: 'hidden',
                borderRadius: theme.radius.card,
                border: border,
                '> div:last-of-type': {
                    borderRight: 'none'
                },
            },
            mobile && {
                border: 'none',
                borderRadius: 'none'
            }
        ),
        item: {
            container: (narrow) => css(
                {
                    background: theme.interface.rgb,
                    padding: '2.5rem',
                    flex: '1 1 auto',
                    minWidth: 0,
                    borderRight: '1px solid ' + theme.pale.rgb
                },
                narrow && {
                    padding: '2.5rem 1rem',
                },
                mobile && {
                    padding: 0
                }
            ),
            grid: css({
                paddingTop: '.75rem',
                alignItems: 'flex-end',
                flex: '0 0 initial',
                minWidth: 'max-content',
                justifyContent: 'space-between'
            }),
            header: (index) => css(
                {
                    position: 'relative',
                    height: '1.5rem',
                    marginBottom: '0.5rem',
                    '> div': {
                        position: 'absolute',
                        right: '0',
                        left: '0'
                    }
                },
                index > 0 && {
                    marginTop: '2.5rem'
                }
            ),
        },
        menu: {
            container: (side, left) => css(
                {
                    background: theme.interface.rgb,
                    flexBasis: '18rem',
                    width: '18rem',
                    padding: '1.25rem',
                    overflow: 'hidden',
                    flexShrink: 1,
                    flexGrow: 0,
                    borderRight: '1px solid ' + theme.pale.rgb
                },
                mobile && {
                    flex: 1,
                    padding: 0,
                },
                side && {
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    top: 0,
                    borderRight: 'none',
                    borderLeft: '1px solid ' + theme.pale.rgb
                },
                left === false && !side && {
                    flexBasis: 0,
                    padding: '1.25rem 0',
                    overflow: 'hidden',
                    border: 'none',
                    '> *': {
                        width: '18rem',
                        flexShrink: 0
                    }
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
                    padding: (groups && !mobile) ? '0 1.25rem 0 1.75rem' : '0 1.25rem'
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
