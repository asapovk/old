import { css } from '@emotion/core';
import { useTheme, useTypography } from '../../hooks';

export default (forElka?: boolean) => {
    const theme = useTheme().theme;
    const typography = useTypography();
    return {
        menu: {
            container: css({
                width: '100%',
            }),

            holder: css({
                backgroundColor: theme.interface.hex,
                height: 'calc(4rem - 1px)',
                userSelect: 'none',
                alignItems: 'center',
                borderBottom: '1px solid ' + theme.pale.rgb,
                padding: '0 2.5rem',
                justifyContent: 'space-between'
            }, forElka && {
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderBottom: 'none',
                padding: 0
            }),

            header: css({
                cursor: 'pointer',
                marginRight: '2.5rem',
                flexShrink: 0
            }),
            title: css({
                ...typography.display[2]
            }),
            toolbar: css({
                marginLeft: '1.5rem',
                '> *': {
                    marginLeft: '1rem'
                }
            })
        },
        navbar: {
            holder: css({
                alignItems: 'center',
                flex: '1 1 0',
                overflow: 'hidden',
                justifyContent: 'center',
            }, forElka && {
                justifyContent: 'flex-start'
            }),

            item: (active, visible) => css({
                ...typography.caption[1],
                padding: '0.375rem 1.5rem',
                cursor: 'pointer',
                fontWeight: 500,
                flexShrink: 0,
                color: active ? theme.textOnAccent.rgb : theme.text.rgb,
                background: active ? theme.highlight.rgb : 'transparent',
                borderRadius: theme.radius.button,
                display: visible ? 'block' : 'none'
            }),

            dropdown: css({
                boxSizing: 'border-box',
                padding: '1rem',
                display: 'none',
                position: 'absolute',
                right: 0,
                top: '2rem',
                boxShadow: '0px 0.5rem 0.5rem 0px rgba(0, 0, 0, 0.2)',
                zIndex: 1,
                backgroundColor: theme.background.hex,
                borderRadius: theme.radius.default
            }),

            mobile: (active) => css({
                overflow: 'hidden',
                transform: 'scaleY(0)',
                transformOrigin: 'top',
                transition: 'transform 0.15s ease',
                position: 'absolute',
                top: '4rem',
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 11,
                boxShadow: '0 1rem 1rem 0 rgba(0,0,0,0.2)',
                background: theme.background2.hex,
                height: 'fit-content',
                padding: '1rem'
            },
                active && {
                    transform: 'scaleY(1)'
                })
        },
        mobile: {
            hamburger: (active) => css({
                width: '1.5rem',
                height: '1rem',
                cursor: 'pointer',
                transition: 'transform 0.15s ease',
                marginRight: '1.25rem',
                '> *': {
                    width: '1.5rem',
                    height: ' 0.125rem',
                    borderRadius: '0.5rem',
                    transition: 'transform 0.15s ease',
                    backgroundColor: theme.highlight.hex
                },
            },
                active && {
                    transform: 'translate3d(0, 0px, 0) rotate(45deg)',
                    '> :first-child': {
                        opacity: 0
                    },
                    '> :last-child': {
                        transform: 'translate3d(0, -7px, 0) rotate(-90deg)'
                    },
                }
            ),
        }
    }
}