import { css, SerializedStyles, keyframes } from '@emotion/core';
import useTheme from '../../hooks/useTheme';
import Types from './types';

export interface TableStyles {
    tableContainer: SerializedStyles
    groupContainer: ({ hideHeaders }) => SerializedStyles
    groupRowContainer: ({ hideHeaders }) => SerializedStyles
    rowContainer: ({ header, hideHeaders }) => SerializedStyles
    paginationContainer: SerializedStyles
    paginationButton: (active: boolean) => SerializedStyles
    groupTitle: SerializedStyles,
    row: ({ header, groupHeader, last }) => SerializedStyles
    cell: (width?: number, borders?: Types.Borders, columnAlignment?: Types.ColumnAlignment) => SerializedStyles
    actionCell: SerializedStyles,
    actionIcon: (active?: boolean) => SerializedStyles
    expandRow: (active: boolean) => SerializedStyles
    noDataContainer: SerializedStyles
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

        rowContainer: ({ header, hideHeaders }) => css({
            position: 'relative',
            transition: 'all .25s ease',
            flex: 1,
            borderWidth: '1px 0 0 0',
            borderStyle: theme.borders.table.style,
            borderColor: theme.borders.table.color
        }, header && {
            borderWidth: 0,
        }, hideHeaders && {
            "&:first-of-type": {
                borderWidth: 0,
            }
        }),

        row: ({ header, groupHeader, last }) => css({
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            backgroundColor: theme.background.hex,
            ":first-child": {
                borderWidth: '0 !important'
            }
        }, header && {
            backgroundColor: 'transparent',
            color: '#908E91',
            fontWeight: 600,
            fontSize: '0.875rem',
            alignItems: 'center',
        }, last && {
            borderBottom: 0
        }),

        cell: (width?: number, borders?: Types.Borders, columnAlignment?: Types.ColumnAlignment) => css(width
            ? {
                flexBasis: width,
                flexShrink: 0
            }
            : { flex: 1 },
            {
                display: 'flex',
                padding: '1.25rem',
                overflow: 'hidden',
                borderColor: theme.borders.table.color,
                borderStyle: theme.borders.table.style,
                justifyContent: columnAlignment || 'flex-start',
                alignItems: 'center',
                ...getBorders(borders),
            }
        ),

        actionCell: css({
            flexBasis: '1rem',
            flexShrink: 0,
            display: 'flex',
            padding: '1.25rem',
            paddingLeft: 0,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
        }),

        actionIcon: (active?: boolean) => css({
            transform: 'rotate(0)',
            willChange: 'transform',
            transition: 'all .15s ease-in-out',
            color: theme.background2.hex,
        }, active && {
            transform: 'rotate(90deg)',
        }),

        expandRow: (active: boolean) => css({
            padding: '1.25rem',
            transition: 'all 0.2s ease-in-out',
            borderWidth: '1px 0 0 0',
            borderStyle: theme.borders.table.style,
            borderColor: theme.borders.table.color,
            backgroundColor: theme.background2.hex,
            display: 'none'
        }, active && {
            display: 'block'
        }),

        groupContainer: ({ hideHeaders }) => css({
            borderWidth: '0 0 1px 0',
            borderStyle: theme.borders.table.style,
            borderColor: theme.borders.table.color,
            ":last-of-type": {
                borderWidth: 0
            }
        }, !hideHeaders && {
            ":first-of-type": {
                borderWidth: '1px 0',
            }
        }),

        groupRowContainer: ({ hideHeaders }) => css({
            position: 'relative',
            backgroundColor: theme.background2.hex,
            fontSize: '0.875rem',
            color: theme.lowlight.hex,
            lineHeight: '1rem',
            // borderWidth: '1px 0 0 0',
            // borderStyle: theme.borders.table.style,
            // borderColor: theme.borders.table.color,
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

        paginationContainer: css({
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
            borderColor: theme.borders.table.color,
            borderStyle: theme.borders.table.style,
            borderWidth: '1px 0 0 0',
            userSelect: 'none'
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
        }),

        noDataContainer: css({
            padding: '1.25rem',
            textAlign: 'center'
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