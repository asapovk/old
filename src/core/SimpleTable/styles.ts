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
            position: 'relative',
            ...theme.borders.table
        }),

        rowContainer: ({ header, hideHeaders }) => css({
            position: 'relative',
            transition: 'all .25s ease',
            flex: 1,
            borderWidth: '1px 0 0 0',
            borderStyle: theme.borders.table.borderStyle,
            borderColor: theme.borders.table.borderColor
        }, header && {
            borderWidth: 0,
            position: 'sticky',
            top: 0,
            zIndex: 2,
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
            backgroundColor: theme.background2.hex,
        }, header && {
            backgroundColor: 'transparent',
            color: '#908E91',
            fontWeight: 600,
            fontSize: '0.875rem',
            alignItems: 'center',
            borderWidth: '1px 0 0 0',
            borderStyle: theme.borders.table.borderStyle,
            borderColor: theme.borders.table.borderColor,
            "&:first-of-type": {
                borderWidth: 0,
            }
        }, last && {
            borderBottom: 0
        }, !groupHeader && {
            backgroundColor: theme.background2.hex,
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
                borderColor: theme.borders.table.borderColor,
                borderStyle: theme.borders.table.borderStyle,
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
            backgroundColor: theme.background2.hex,
            display: 'none'
        }, active && {
            display: 'block'
        }),

        groupContainer: ({ hideHeaders }) => css({
        }, hideHeaders && {
            ":first-of-type": {
                borderWidth: 0
            }
        }),

        groupRowContainer: ({ hideHeaders }) => css({
            backgroundColor: theme.background2.hex,
            fontSize: '0.875rem',
            color: theme.lowlight.hex,
            lineHeight: '1rem',
            position: 'sticky',
            top: hideHeaders ? 0 : '4rem',
            zIndex: 1
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
            userSelect: 'none'
        }),

        paginationButton: (active: boolean) => css({
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            width: '2rem',
            height: '2rem',
            margin: '0 0.25rem',
            cursor: 'pointer',
            color: theme.lowlight.hex,
            transition: 'all .25s ease-in-out',
            ...theme.borders.table,
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