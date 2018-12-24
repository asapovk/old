import { css } from '@emotion/core';
import useTheme from '../hooks/useTheme';

export default () => {
    const theme = useTheme().theme;
    return {
        main: css`
            transition: all .1s;
            user-select: none;
        `,
        loading: css`
            font-size: 24px;
            font-weight: 500;
        `,
        loadingtext: css`
            font-size: 16px;
            padding-top: 10px;
        `,
        text: theme.text.hex,
        accent: theme.highlight.hex,
        background: theme.background.hex,
        chartTextColor: theme.lowlight.hex,
        lowlight: theme.lowlight.rgb,
    }
}