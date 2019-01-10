import { css } from '@emotion/core'
import { useTheme } from '../../hooks'

export default () => {
    const theme = useTheme().theme

    return {
        root: css({
            height: "100%",
        }),
        preside: css({
            width: "320px",
            borderRightWidth: 1,
            borderRightStyle: "solid",
            borderRightColor: theme.pale.hex,
        }),
        side: css({
            padding: 20,
            width: 280,

            '@media (max-width: 1023px)': {
                paddingTop: 64,
            },
            '@media (max-width: 768px)': {
                width: '100%'
            }
        }),
        $sideScroll: {
            width: "400px",
            top: 0,
            left: 0,
            zIndex: 10
        },
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