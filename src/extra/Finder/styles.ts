import { css } from '@emotion/core';
import useTheme from '../../hooks/useTheme';

export default () => {
    const theme = useTheme().theme;
    return {
        root: css({
            lineHeight: 1,
            color: theme.text.rgb,
            backgroundColor: theme.background.rgb,
            ...theme.borders.textfield
        }),
        menu: css({
            marginLeft: '-0.5px',
            minWidth: 200,
        }),
        items: css({
            padding: '0.75rem',
            maxHeight: '40rem',
            overflow: 'auto',
            '> *': {
                flexShrink: 0,
            }
        }),

        filter: css({
            padding: '0.75rem',
            borderBottom: '1px solid',
            borderColor: theme.borders.textfield.borderColor,
        }),

        section: css({

        }),

        navItem: (active?: boolean) => css({

        }),

        badge: css({

        }),

    }
}