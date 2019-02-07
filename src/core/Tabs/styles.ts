import { css, keyframes } from '@emotion/core';
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
            flexBasis: '20rem',
            flexShrink: 0,
            flexWrap: 'wrap',
            boxSizing: 'border-box',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: theme.borders.table.color,
            borderRadius: '0.25rem',
            position: 'sticky',
            top: '50px', //TODO: 
            margin: '0 0 0 2.5rem',
            padding: '0 1.25rem',
        }, reverseContainer && {
            margin: '0 2.5rem 0 0'
        }),

        menuItem: css({
            display: 'block',
            width: '100%',
            boxSizing: 'border-box',
            cursor: 'pointer',
            borderWidth: '0 0 1px 0',
            borderColor: theme.borders.table.color,
            borderStyle: 'solid',
            padding: '1.25rem 0',
            "&:last-child": {
                borderWidth: '0',
            }
        }),

        content: css({
            display: 'flex',
            flex: 1,
            flexWrap: 'wrap',
        }),

        tab: css({
            display: 'block',
            width: '100%',
            boxSizing: 'border-box',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: theme.borders.table.color,
            borderRadius: '0.25rem',
            padding: '1.25rem',
            marginBottom: '1.25rem',
            height: '300px'
        })

    }
}