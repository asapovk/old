import { css } from '@emotion/core'
import { useTheme } from '../../hooks'

export default () => {
    const theme = useTheme().theme

    return {
        sidebar: {
            holder: css({
                width: '20rem'
            }),
            content: css({
                top: 0,
                left: 0,
                bottom: 0,
                position: 'fixed',
                zIndex: 2,
                borderRight: '1px solid ' + theme.pale.hex,
                background: theme.interface.hex,
                '@media (max-width: 1023px)': {
                    paddingTop: '4rem',
                },
                '@media (max-width: 768px)': {
                    width: '100%'
                }
            }),
            logo: css({
                padding: '2.5rem 0',
                height: '3.5rem',
                margin: '0 auto'
            }),
        },
        main: {
            top: css({
                backgroundColor: theme.background2.hex,
                padding: '2.5rem 0',
                width: '100%',
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
                }
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