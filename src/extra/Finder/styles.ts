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
            maxHeight: '40rem',
            overflow: 'auto',
        }),

        filter: css({
            padding: '0.75rem',
            borderBottom: '1px solid',
            borderColor: theme.borders.textfield.borderColor,
        }),

        navItem: (active?: boolean) => css({
            padding: '1.25rem 0.75rem',
            '> div': {
                flex: 1,
            },
            ':hover': {
                background: theme.interface.hex
            },
            ...(active && {
                background: theme.interface.rgba(0.7)
            })
        }),

        badge: css({
            userSelect: 'none',
            padding: '0.15rem 0.25rem',
            ...theme.borders.textfield,
            background: theme.interface.hex,
            marginRight: '0.5rem',
        }),

    }
}