import { css, SerializedStyles, keyframes } from '@emotion/core';
import useTheme from '../../hooks/useTheme';
import Types from './types';

export interface TableStyles {
    tableContainer: SerializedStyles
    groupRowContainer: SerializedStyles
    rowContainer: SerializedStyles
    rowsContainer: SerializedStyles
    paginationContainer: SerializedStyles
    paginationButton: (active: boolean) => SerializedStyles
    groupTitle: SerializedStyles,
    // group: SerializedStyles,
    row: (header?: boolean) => SerializedStyles
    cell: (width?: number, borders?: Types.Borders, columnAlignment?: Types.ColumnAlignment) => SerializedStyles
    actionIcon: (active?: boolean) => SerializedStyles
    expandRow: (active: boolean) => SerializedStyles
}

export default (): TableStyles => {
    const theme = useTheme().theme;

    return {
        tableContainer: css({
            borderRadius: theme.radius.table,
            borderWidth: theme.borders.table.width,
            borderStyle: theme.borders.table.style,
            borderColor: theme.borders.table.color,
            overflow: 'hidden',
        }),

        rowContainer: css({
            position: 'relative',
            transition: 'all .25s ease',
            flex: 1
        }),

        rowsContainer: css({
            flex: 1,
            "> :last-child": {
                "> :first-of-type": {
                    borderWidth: 0
                }
            }
        }),

        row: (header?: boolean) => css({
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            backgroundColor: theme.background.hex,
            borderWidth: '0 0 1px 0',
            borderStyle: theme.borders.table.style,
            borderColor: theme.borders.table.color
        }, header && {
            backgroundColor: theme.background.rgba(0),
            borderWidth: 0,
            color: '#908E91',
            fontWeight: 600,
            fontSize: '0.875rem',
            alignItems: 'center'
        }),

        cell: (width?: number, borders?: Types.Borders, columnAlignment?: Types.ColumnAlignment) => css(width
            ? { flexBasis: width }
            : { flex: 1 },
            {
                padding: '1.25rem',
                overflow: 'hidden',
                borderColor: theme.borders.table.color,
                borderStyle: theme.borders.table.style,
                ...getBorders(borders),
                textAlign: columnAlignment || 'left'
            }
        ),

        actionIcon: (active?: boolean) => css({
            transform: 'rotate(0)',
            willChange: 'transform',
            transition: 'all .2s ease-in-out',
            color: theme.background2.hex,
        }, active && {
            transform: 'rotate(90deg)',
        }),

        expandRow: (active: boolean) => css({
            opacity: 0,
            padding: '1.25rem',
            transition: 'all 0.2s ease-in-out',
            borderWidth: '0 0 1px 0',
            borderStyle: theme.borders.table.style,
            borderColor: theme.borders.table.color,
            backgroundColor: theme.background2.hex,
            visibility: 'hidden'
        }, active && {
            visibility: 'visible',
            opacity: 1
        }),

        groupRowContainer: css({
            position: 'relative',
            backgroundColor: theme.background2.hex,
            borderWidth: '1px 0 1px 0',
            borderStyle: theme.borders.table.style,
            borderColor: theme.borders.table.color,
        }),

        groupTitle: css({
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '1.25rem',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        }),


        // group: {
        //     container: css({
        //         backgroundColor: '#F2F0F5',
        //         borderStyle: theme.borders.table.style,
        //         borderWidth: '0 0 1px 0',
        //         borderColor: theme.borders.table.color,
        //     })
        // },

        paginationContainer: css({
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
            borderColor: theme.borders.table.color,
            borderStyle: theme.borders.table.style,
            borderWidth: '1px 0 0 0',
        }),

        paginationButton: (active: boolean) => css({
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