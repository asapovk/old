import { css } from '@emotion/core';
import useTheme from '../../hooks/useTheme';

export default ({ reverseContainer }) => {
    const theme = useTheme().theme;

    const breakpoints = [414, 768, 1024];

    const mq = breakpoints.map(
        bp => `@media (max-width: ${bp}px)`
    )

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
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: theme.borders.table.color,
            borderRadius: '0.5rem',
            position: 'sticky',
            top: '1.25rem',
            margin: '0 0 0 2.5rem',
            padding: '0.25rem 0 0.25rem 1.25rem',
            [mq[3]]: {
                display: 'none'
            },
            "> div:last-of-type > div": {
                borderWidth: '0',
            }
        }, reverseContainer && {
            margin: '0 2.5rem 0 0'
        }),

        menuItem: (activeItem: boolean) => css({
            display: 'block',
            //width: '100%',
            boxSizing: 'border-box',
            cursor: 'pointer',
            borderWidth: '0 0 1px 0',
            borderColor: theme.borders.table.color,
            borderStyle: 'solid',
            padding: '1.25rem 0',
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
            marginBottom: '2.5rem',
            transition: 'all .25s ease-in-out',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: theme.borders.table.color,
            [mq[0]]: {
                padding: '1.25rem',
            },
        }, activeItem && {
            boxShadow: '0px .75rem .75rem 0px rgba(0, 0, 0, 0.14)',
        }),

        noDataContainer: css({
            padding: '1.25rem',
            textAlign: 'center'
        })

    }
}