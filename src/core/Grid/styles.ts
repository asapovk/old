import { css } from '@emotion/core';
import useTheme from '../../hooks/useTheme';
import Types from './types';

export default ({ gridTemplateColumns }) => {
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
            gridTemplateColumns: gridTemplateColumns,
        }),

        noDataContainer: css({
            padding: '1.25rem',
            textAlign: 'center'
        })
    }
}

export const rowStyles = () => {
    const theme = useTheme().theme;

    return {
        rowWrapper: css({
            display: 'contents',
            ':last-of-type': {
                "> div": {
                    borderBottomWidth: 0,
                    borderRadius: '0 0 .5rem .5rem',
                    ':first-of-type': {
                        "> div": {
                            borderBottomWidth: 0,
                        }
                    },
                }
            }
        }),

        rowCellsWrapper: ({ expandForm }) => css({
            display: 'contents',
        }, expandForm && {
            ':last-of-type': {
                "> div": {
                    borderBottomWidth: 0,
                }
            }
        }),

        rowCell: ({ borders, alignment, expanded, expandForm }) => css({
            display: 'flex',
            alignItems: 'center',
            padding: '1.25rem',
            overflow: 'hidden',
            borderStyle: 'solid',
            borderColor: theme.pale.hex,
            borderWidth: getBorders(borders),
            justifyContent: alignment,
            fontSize: '1rem',
            lineHeight: '1rem'
        }, expanded && {
            borderBottom: 0
        }, expandForm && {
            cursor: 'pointer'
        }),

        expandForm: ({ expanded, columnsLength }) => css({
            display: 'none',
            gridColumn: `span ${columnsLength}`,
            backgroundColor: theme.background2.hex,
            padding: '1.25rem',
            borderStyle: 'solid',
            borderColor: theme.pale.hex,
            borderWidth: '1px 0',
        }, expanded && {
            display: 'block'
        }),

        icon: ({ expanded }) => css({
            transition: 'all .15s ease-in-out',
            transform: 'rotate(0)'
        }, expanded && {
            transform: 'rotate(90deg)'
        })
    }

}

export const paginationStyles = () => {
    const theme = useTheme().theme;

    return {
        paginationContainer: css({
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
            // borderColor: theme.borders.table.color,
            // borderStyle: theme.borders.table.style,
            // borderWidth: '1px 0 0 0',
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
        })
    }
}


export const headerStyles = () => {
    const theme = useTheme().theme;

    return {
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
            display: 'flex',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            backgroundColor: theme.background.hex,
            padding: '1.25rem',
            overflow: 'hidden',
            borderStyle: 'solid',
            borderColor: theme.pale.hex,
            justifyContent: alignment,
            borderWidth: getBorders(borders),
            zIndex: 1,
            fontSize: '0.875rem',
            color: theme.lowlight.hex,
            fontWeight: 600,
            lineHeight: '1rem'
        }),
    }
}

export const subHeaderStyles = ({ columnsLength, hideHeaders }) => {
    const theme = useTheme().theme;

    return {
        subheader: css({
            gridColumn: `span ${columnsLength}`,
            backgroundColor: theme.background2.hex,
            padding: '.5rem 1.25rem',
            borderStyle: 'solid',
            borderColor: theme.pale.hex,
            borderWidth: '0 0 1px 0',
            position: 'sticky',
            top: hideHeaders ? 0 : 'calc(3.5rem + 1px)',
            boxSizing: 'border-box',
            zIndex: 1,
            fontSize: '0.875rem',
            color: theme.lowlight.hex,
            lineHeight: '1rem'
        }),
    }
}

export const getBorders = (borders?: Types.Borders) => {
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