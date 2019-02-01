import { css } from '@emotion/core';
import useTheme from '../../../src/hooks/useTheme';

export default () => {
    const theme = useTheme().theme;
    return {
        cards: css({
            overflowY: 'auto',
            height: '100%'
        }),
        stories: css({
            height: '12.5rem',
            margin: '1.25rem 0',
            overflowX: 'auto'
        })
    }
}