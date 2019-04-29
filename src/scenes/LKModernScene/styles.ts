import { css } from '@emotion/core';
import { useTheme, useTypography } from '../../hooks';

export default () => {
    const theme = useTheme().theme

    const breakpoints = [414, 768, 1024]

    const mq = breakpoints.map(
        bp => `@media (max-width: ${bp}px)`
    )

    return {
        theme: theme,

        container: css({
            minHeight: '100%',
        }),

        background: css({
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(30deg, #552785 0%, #6b3792 30%, #c91e62 100%)'
        })
    }
}