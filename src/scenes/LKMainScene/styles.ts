import { css } from '@emotion/core'
import { useTheme, useTypography } from '../../hooks';

export default () => {
    const theme = useTheme().theme
    const typography = useTypography();

    const breakpoints = [414, 768, 1024]

    const mq = breakpoints.map(
        bp => `@media (max-width: ${bp}px)`
    )

    return {
        theme: theme,

        container: css({

        }),

        mask: css({
            background: theme.background.rgba(.9),
            position: 'fixed',
            zIndex: 1,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }),

        main: {
            container: css({
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                boxSizing: 'border-box',
                padding: '2.75rem 4.5rem',
                [mq[1]]: {
                    padding: '2.5rem',
                },
                [mq[0]]: {
                    padding: '1.25rem',
                },
            }),

            holder: css({
                display: 'flex',
                flexBasis: 960,
                maxWidth: '960px',
                flexDirection: 'column',
                [mq[1]]: {
                    display: 'block',
                    width: '100%'
                },
            }),

            menu: css({
                display: 'flex',
                alignItems: 'center',
                height: '4.5rem',
                width: '100%',
                marginBottom: '2.75rem',
            }),

            back: css({
                alignItems: 'center',
                paddingRight: '1rem',
                marginRight: '1rem',
                borderRight: '1px solid ' + theme.pale.rgb,
                cursor: 'pointer'
            }),
        },

        sidebar: {
            container: (display) => css({
                display: display ? 'flex' : 'none',
                position: 'sticky',
                flexDirection: 'column',
                top: 0,
                width: '15rem',
                boxSizing: 'border-box',
                padding: '2.75rem 0 2.75rem 2.75rem',
                maxHeight: 'max-content',
                minHeight: '100vh',
                justifyContent: 'space-between',
                [mq[1]]: {
                    position: 'absolute',
                },
            }),

            background: css({
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                width: '15rem',
                borderRightWidth: '1px',
                borderRightStyle: 'solid',
                borderRightColor: theme.pale.hex,
                background: 'linear-gradient(270deg, #F2F0F5 0%, #FAF7FC 100%)',
                zIndex: 2
            }),

            user: {
                container: css({
                    position: 'absolute',
                    zIndex: 3
                }),
                avatar: css({
                    display: 'flex',
                    color: '#FFFFFF',
                    alignItems: 'center',
                    width: '4.5rem',
                    height: '4.5rem',
                    borderRadius: '50%',
                    background: 'linear-gradient(180deg, #A567C2 0%, #6B368F 100%)',
                    "> div": {
                        ...typography.display[2],
                        width: 'inherit',
                        textAlign: 'center',
                        textTransform: 'uppercase'
                    }
                }),

                name: css({
                    display: 'block',
                    marginTop: '.75rem',
                    paddingRight: '1rem'
                })
            },

            content: css({
                zIndex: 3,
                marginTop: '11.25rem'
            }),

            logo: css({
                paddingTop: '3.5rem',
                width: '8rem',
                marginLeft: '.75rem',
                zIndex: 3
            }),
        },
    }

}