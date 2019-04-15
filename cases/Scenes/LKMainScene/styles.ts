import { css } from '@emotion/core';
import useTheme from '../../../src/hooks/useTheme';

export default () => {
    const theme = useTheme().theme;
    return {
        card: {
            active: css({
                position: 'absolute',
                top: 0, bottom: 0,
                paddingRight: '.75rem',
                // left: '-10rem',
                color: theme.highlight.hex,
                transition: 'all .3s ease-in-out',
            }),
        },

        stories: css({
            height: '12.5rem',
            margin: '1.25rem 0',
            overflowX: 'auto'
        })
    }
}