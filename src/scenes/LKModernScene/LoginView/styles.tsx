import { css } from '@emotion/core'
import { useTheme, useTypography } from '../../../hooks';

export default () => {
    const theme = useTheme().theme
    const typography = useTypography();

    const breakpoints = [414, 768, 1024]

    const mq = breakpoints.map(
        bp => `@media (max-width: ${bp}px)`
    )

    return {
        container: css({
            flexBasis: '36rem',
            flexShrink: 0,
            minHeight: '100%',
            padding: '2.5rem 4rem',
            boxSizing: 'border-box',
        }),

        background: css({
            width: '42rem',
            backgroundColor: theme.background2.hex,
            position: 'absolute',
            top: 0,
            left: '-6rem',
            bottom: 0,
            right: 0,
        }),
    }
}