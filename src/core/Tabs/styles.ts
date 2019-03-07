import { css } from '@emotion/core';
import useTheme from '../../hooks/useTheme';

export default ({ reverseContainer }) => {
    const theme = useTheme().theme;

    return {
        container: css({
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
        }, reverseContainer && {
            flexDirection: 'row-reverse'
        }),

        menu: css({
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '20rem',
            flexShrink: 0,
            flexWrap: 'wrap',
            boxSizing: 'border-box',
            // borderStyle: 'solid',
            // borderWidth: '1px',
            // borderColor: theme.borders.table.color,
            borderRadius: '0.5rem',
            position: 'sticky',
            top: 0,
            margin: '0 0 0 2.5rem',
            padding: '1.25rem 0 0 1.25rem',
            "@media (max-width: 1024px)": {
                display: 'none'
            }
        }, reverseContainer && {
            margin: '0 2.5rem 0 0'
        }),

        menuItem: (activeItem: boolean) => css({
            display: 'block',
            width: '100%',
            boxSizing: 'border-box',
            cursor: 'pointer',
            borderWidth: '0 0 1px 0',
            borderColor: theme.borders.table.color,
            borderStyle: 'solid',
            padding: '1.25rem 0',
            // "&:last-child": {
            //     borderWidth: '0',
            // }
        }, activeItem && {
            color: theme.highlight.hex
        }),

        content: css({
            display: 'flex',
            flex: 1,
            flexWrap: 'wrap',
        }),

        tab: (activeItem: boolean) => css({
            display: 'block',
            width: '100%',
            boxSizing: 'border-box',
            borderRadius: '0.5rem',
            padding: '2rem',
            marginBottom: '1.25rem',
            transition: 'all .25s ease-in-out',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: theme.borders.table.color,
        }, activeItem && {
            boxShadow: '0px 0.5rem 0.5rem 0px rgba(0, 0, 0, 0.2)',
        })

    }
}