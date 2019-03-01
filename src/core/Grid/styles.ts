import { css } from '@emotion/core';
import useTheme from '../../hooks/useTheme';
import Types from './types';

export default ({ columns, hideHeaders }) => {
    const theme = useTheme().theme;

    return {
        wrapper: css({
            position: 'relative',
            borderRadius: theme.radius.table,
            borderWidth: theme.borders.table.width,
            borderStyle: theme.borders.table.style,
            borderColor: theme.borders.table.color,
        }),

        container: css({
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, auto)`,
        }),

        headerWrapper: css({
            display: 'contents',
            '> div': {
                ':first-of-type': {
                    borderRadius: '8px 0 0 0'
                },
                ':last-of-type': {
                    borderRadius: '0 8px 0 0'
                }
            }
        }),

        headerCell: ({ borders, alignment }) => css({
            position: 'sticky',
            top: 0,
            backgroundColor: theme.background.hex,
            padding: '1.25rem',
            overflow: 'hidden',
            borderStyle: 'solid',
            borderColor: theme.pale.hex,
            textAlign: alignment,
            borderWidth: getBorders(borders),
        }),

        subheader: css({
            gridColumn: `span ${columns}`,
            backgroundColor: theme.background2.hex,
            padding: '1.25rem',
            borderStyle: 'solid',
            borderColor: theme.pale.hex,
            borderWidth: '0 0 1px 0',
            position: 'sticky',
            top: hideHeaders ? 0 : 'calc(4rem + 1px)',
            boxSizing: 'border-box'
        }),

        rowWrapper: css({
            display: 'contents',
            position: 'relative',
            ':last-of-type': {
                "> div": {
                    borderBottomWidth: 0,
                }
            },
            "::after": {
                content: `''`,
                width: '.5rem',
                height: '.5rem',
                position: 'absolute',
                backgroundColor: 'red',
                top: 0,
                right: 0
            }

        }),

        cell: ({ borders, alignment }) => css({
            padding: '1.25rem',
            overflow: 'hidden',
            borderStyle: 'solid',
            borderColor: theme.pale.hex,
            borderWidth: getBorders(borders),
            textAlign: alignment,
        }),

        expand: ({ expanded }) => css({
            display: 'none',
            gridColumn: `span ${columns}`,
            backgroundColor: theme.background2.hex,
            padding: '1.25rem',
            borderStyle: 'solid',
            borderColor: theme.pale.hex,
            borderWidth: '0 0 1px 0',
        }, expanded && {
            display: 'block'
        }),

        noDataContainer: css({
            padding: '1.25rem',
            textAlign: 'center'
        })
    }
}

function getBorders(borders?: Types.Borders) {
    let borderWidth: string = '0 0 1px 0';
    switch (borders) {
        case 'all':
            borderWidth = '0 1px 1px 1px';
            break;
        case 'left':
            borderWidth = '0 0 1px 1px';
            break;
        case 'right':
            borderWidth = '0 1px 1px 0';
            break;
        case 'none':
            borderWidth = '0'
            break;
    }
    return borderWidth;
}