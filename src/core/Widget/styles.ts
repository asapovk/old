import { css } from '@emotion/core';
import useTheme from '../../hooks/useTheme';

export default (clickable: boolean) => {
    const theme = useTheme().theme;
    return {
        container: css({
            position: 'relative',
            boxSizing: 'border-box',
            lineHeight: 1,
            padding: '1rem',
            minWidth: '16rem',
            overflow: 'hidden',
            background: theme.interface.rgb,
            borderRadius: '0.5rem',
            // borderColor: theme.borders.widget.color,
            // borderStyle: theme.borders.widget.style,
            // borderWidth: theme.borders.widget.width,
            transition: 'all .2s ease',
            userSelect: 'none',
            boxShadow: '0 1px 6px 0 rgba(32,33,36,0.28)',
        }, clickable && {
            "&:hover": {
                transform: 'scale(1.05)'
            },
            "&:active": {
                transform: 'scale(1.03)'
            }
        }),

        title: css({
            paddingRight: '1rem',
            fontSize: '1.125rem',
            textTransform: 'uppercase'
        }),

        loading: css({
            fontSize: '1.5rem',
            fontWeight: 500,
            textAlign: 'center',
            "> svg": {
                color: theme.highlight.hex
            },
        }),

        loadingText: css({
            fontSize: '1rem',
            paddingTop: '0.75rem',
            color: theme.lowlight.hex
        }),

        icon: css({
            color: theme.highlight.hex
        })
    }
}