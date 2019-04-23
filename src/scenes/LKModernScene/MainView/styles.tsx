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
            flex: 1,
            minHeight: '100%',
            boxSizing: 'border-box',
        })
    }
}