import { css } from '@emotion/core'
import useTheme from '../../hooks/useTheme'
import useTypography from '../../hooks/useTypography'

export default () => {
    const theme = useTheme().theme
    const typography = useTypography()

    return {
        root: css({
            height: "100%",
        }),
        side: css({
            width: 320,
            borderRightWidth: 1,
            borderRightStyle: "solid",
            borderRightColor: theme.pale.hex,
            '@media (max-width: 1023px)': {
                paddingTop: 64,
            }
        }),
        $sideScroll: {
            padding: 20
        },
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