import { css, keyframes } from '@emotion/core';
import useTheme from '../../hooks/useTheme';

export default () => {
    const theme = useTheme().theme;

    return {
        container: css({
            display: "inline-block",
            lineHeight: 0,
            animation: `${spin} 1.5s linear infinite`
        })
    }
}

const spin = keyframes({
    "from": {
        transform: "rotate(0deg)"
    },
    "to": {
        transform: "rotate(360deg)"
    }
});