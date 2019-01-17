import { css } from '@emotion/core'
import { useTheme } from '../../hooks'

export default () => {
    const theme = useTheme().theme

    return {
        sidebar: {
            holder: css({
                width: '20rem',
                zIndex: 3,
                position: 'sticky',
                bottom: 0,
                alignSelf: 'flex-end',
                flexDirection: 'column'
            }),
            background: css({
                top: 0,
                left: 0,
                bottom: 0,
                position: 'fixed',
                zIndex: 2,
                width: '20rem',
                borderRight: '1px solid ' + theme.pale.hex,
                background: theme.interface.hex,
                '@media (max-width: 1023px)': {
                    paddingTop: '4rem',
                },
                '@media (max-width: 768px)': {
                    width: '100%'
                }
            }),
            content: css({
                width: '20rem',
                zIndex: 3,
                flexDirection: 'column'
            }),
            logo: {
                container: css({
                    width: '20rem',
                    height: '8.5rem',
                }),
                holder: css({
                    position: 'fixed',
                    width: '20rem',
                    zIndex: 4,
                    alignItems: 'center',
                    flexDirection: 'column',
                    '&::before': {
                        content: `''`,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '8rem',
                        background: theme.interface.hex,
                    },
                    '&::after': {
                        content: `''`,
                        width: '100%',
                        height: '0.5rem',
                        background: `linear-gradient(180deg, ${theme.interface.rgb} 0%, ${theme.interface.rgba(0)} 100%)`,
                    }
                }),
                wrapper: css({
                    padding: '2.5rem 0 2rem 0',
                    height: '3.5rem',
                    width: '12rem',
                    justifyContent: 'center',
                })
            }
        },
        main: {
            container: css({
                position: 'sticky',
                top: 0,
                alignSelf: 'flex-start',
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1
            }),
            top: css({
                backgroundColor: theme.background2.hex,
                padding: '2.5rem 0',
                width: '100%',
                justifyContent: 'center',
                '@media (max-width: 768px)': {
                    display: 'none'
                }
            }),
            holder: css({
                width: '100%',
                position: 'relative',
                maxWidth: '960px',
                '@media (max-width: 768px)': {
                    display: 'none'
                },
                paddingBottom: '1.25rem'
            }),
        },
        menu: {
            holder: css({
                height: '4rem',
                width: '100%'
            }),
            desktop: css({
                position: 'fixed',
                left: '20rem',
                right: 0,
                top: 0,
                zIndex: 1,
                '@media (max-width: 1023px)': {
                    display: 'none',
                }
            }),
            mobile: css({
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                zIndex: 1,
                '@media (min-width: 1024px)': {
                    display: 'none'
                }
            }),
        }
    }
}