import { css } from '@emotion/core';
import useTheme from '../../../src/hooks/useTheme';

export default () => {
    const theme = useTheme().theme;
    return {
        cards: css({
            overflowY: 'auto',
            height: '100%'
        }),
        cardsBorderBottom: css({
            background: `linear-gradient(180deg, ${theme.background.rgba(0)} 0%, ${theme.background.rgba(100)} 100%)`,
            height: '1rem',
            position: 'sticky',
            bottom: 0
        }),
        cardsBorderTop: css({
            background: `linear-gradient(0deg, ${theme.background.rgba(0)} 0%, ${theme.background.rgba(100)} 100%)`,
            height: '0.5rem',
            position: 'sticky',
            top: 0,
            zIndex: 1
        }),
        stories: css({
            height: '12.5rem',
            margin: '1.25rem 0',
            overflowX: 'auto'
        })
    }
}