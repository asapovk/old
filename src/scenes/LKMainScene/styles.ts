import { css } from '@emotion/core'
import { useTheme } from '../../hooks'

export default () => {
    const theme = useTheme().theme

    return {
        root: css({
            height: "100%",
        }),
        sidebarHolder: css({
            width: "20rem",
            borderRightWidth: 1,
            borderRightStyle: "solid",
            borderRightColor: theme.pale.hex,
        }),
        sidebar: css({
            top: 0,
            left: 0,
            bottom: 0,
            width: "20rem",
            position: "fixed",
            overflow: 'hidden',
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
        main: css({
            flex: 1,
            height: "100%",
            position: "relative",
            '@media (max-width: 768px)': {
                display: 'none'
            }
        }),
        menuMobile: css({
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            zIndex: 1,
            '@media (min-width: 1024px)': {
                display: 'none'
            }
        }),
        menuDesktop: css({
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            zIndex: 1,
            '@media (max-width: 1023px)': {
                display: 'none',
            }
        }),
        $mainScroll: {
            paddingTop: 64
        }
    }
}