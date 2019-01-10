import { css } from '@emotion/core';
import { useTheme, useTypography } from '../../hooks';

export default () => {

    const theme = useTheme().theme;
    const typography = useTypography();

    return {
        wrapper: css({
            width: "2rem",
            height: "2rem"
        }),

        icon: css({
            width: "100%",
            height: "100%",
            color: theme.highlight.hex,
        }),
    }
}