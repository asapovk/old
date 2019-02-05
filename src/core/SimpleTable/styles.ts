import { css } from '@emotion/core';
import useTheme from '../../hooks/useTheme';
import Types from './types';

export default () => {
    const theme = useTheme().theme;

    return {
        container: css({
            borderRadius: theme.radius.table,
            borderWidth: theme.borders.table.width,
            borderStyle: theme.borders.table.style,
            borderColor: theme.borders.table.color,
            overflow: 'hidden',
            boxSizing: 'border-box'
        }),

        head: {
            cell: (width?: number, borders?: Types.Borders) => css(
                width
                    ? { flexBasis: width }
                    : { flex: 1 },
                {
                    padding: '1.25rem',
                    overflow: 'hidden',
                    borderColor: theme.borders.table.color,
                    borderStyle: theme.borders.table.style,
                    ...getBorders(borders)
                }
            ),

            row: css({
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#908E91',
                borderStyle: theme.borders.table.style,
                borderWidth: '0 0 1px 0',
                borderColor: theme.borders.table.color,
            })
        },

        group: {
            container: css({
                backgroundColor: '#F2F0F5',
                borderStyle: theme.borders.table.style,
                borderWidth: '0 0 1px 0',
                borderColor: theme.borders.table.color,
            }),

            title: css({
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '1.25rem',
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
            }),

            cell: (width?: number, borders?: Types.Borders) => css(width
                ? { flexBasis: width }
                : { flex: 1 },
                {
                    padding: '1.25rem',
                    overflow: 'hidden',
                    borderColor: theme.borders.table.color,
                    borderStyle: theme.borders.table.style,
                    ...getBorders(borders)
                }
            )
        },

        data: {
            group: css({
                backgroundColor: '#F2F0F5',
                borderStyle: theme.borders.table.style,
                borderWidth: '0 0 1px 0',
                borderColor: theme.borders.table.color,
                padding: '1.25rem',
            }),

            row: css({
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                borderStyle: theme.borders.table.style,
                borderWidth: '0 0 1px 0',
                borderColor: theme.borders.table.color
            }),

            cell: (width?: number, borders?: Types.Borders) => css(width
                ? { flexBasis: width }
                : { flex: 1 },
                {
                    padding: '1.25rem',
                    overflow: 'hidden',
                    borderColor: theme.borders.table.color,
                    borderStyle: theme.borders.table.style,
                    ...getBorders(borders)
                }
            )
        },


        pagination: {
            container: css({
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem'
            }),

            button: (active: boolean) => css({
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                borderColor: theme.borders.table.color,
                borderStyle: theme.borders.table.style,
                borderWidth: '1px',
                borderRadius: '0.25rem',
                width: '2rem',
                height: '2rem',
                margin: '0 0.25rem',
                cursor: 'pointer',
                color: theme.lowlight.hex,
                transition: 'all .25s ease-in-out'
            }, active && {
                borderColor: theme.highlight.hex,
                color: theme.highlight.hex
            })
        }
    }
}

function getBorders(borders?: Types.Borders) {
    switch (borders) {
        case 'all':
            return {
                borderWidth: '0 1px'
            }
        case 'left':
            return {
                borderWidth: '0 0 0 1px'
            }
        case 'right':
            return {
                borderWidth: '0 1px 0 0'
            }
        default:
            return {
                borderWidth: 0
            }
    }
} 