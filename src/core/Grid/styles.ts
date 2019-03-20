import { css } from '@emotion/core';
import useTheme from '../../hooks/useTheme';
import Types from './types';

export default () => {
    const theme = useTheme().theme;

    return {
        wrapper: css({
            position: 'relative',
            borderRadius: theme.radius.table,
            borderColor: 'transparent',
            boxShadow: '0 1px 6px 0 rgba(32,33,36,0.28)',
        }),

        container: css({
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
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
        rowWrapper: ({ expanded, withOpacity }) => css({
            boxSizing: 'border-box',
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            backgroundColor: theme.background.hex,
            ':last-of-type': {
                borderBottomWidth: 0,
                borderRadius: '0 0 .5rem .5rem',
                "> div": {
                    ':first-of-type': {
                        "> div": {
                            borderBottomWidth: 0
                        }
                    },
                }
            }
        }, expanded && {
            margin: '0 -0.75rem -2px -0.75rem',
            borderRadius: '0.5rem',
            padding: '0 0.75rem',
            zIndex: 6,
            // boxShadow: '0 1px 6px 0 rgba(32,33,36,0.28)',
            boxShadow: '0 2px 16px 0 rgba(0,0,0,.25)',
            ':last-of-type': {
                borderRadius: '.5rem'
            }
        }, withOpacity && {
            opacity: .7
        }),

        rowCellsWrapper: css({
            display: 'flex',
            flex: 1,
            ':last-of-type': {
                "> div": {
                    borderBottomWidth: 0,
                }
            }
        }),

        rowCell: ({ action, borders, alignment, width, expanded }) => css({
            display: 'flex',
            boxSizing: 'border-box',
            alignItems: 'center',
            padding: '1.25rem',
            overflow: 'hidden',
            justifyContent: alignment,
            fontSize: '1rem',
            borderStyle: 'solid',
            borderColor: theme.pale.hex,
            borderWidth: getBorders(borders),
            flexBasis: width ? width + 'px' : 0
        }, action && {
            justifyContent: 'flex-start',
            padding: '0'
        }, !width && {
            flex: 1
        }, expanded && {
            borderBottomWidth: 0
        }),

        expandForm: ({ expanded }) => css({
            display: 'none',
            padding: '1.25rem',
            borderWidth: '1px 0 0 0',
            borderStyle: 'solid',
            borderColor: theme.pale.hex
        }, expanded && {
            display: 'block',
            backgroundColor: theme.background.hex,
        }),

        icon: ({ expanded }) => css({
            transition: 'all .15s ease-in-out',
            transform: 'rotate(0)',
            cursor: 'pointer'
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
            userSelect: 'none'
        }),

        paginationButton: (active: boolean) => css({
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            borderColor: theme.pale.hex,
            borderStyle: 'solid',
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
            display: 'flex',
            flex: 1,
            top: 0,
            position: 'sticky',
            zIndex: 1,
            '> div': {
                ':first-of-type': {
                    borderRadius: '8px 0 0 0'
                },
                ':last-of-type': {
                    borderRadius: '0 8px 0 0'
                }
            }
        }),

        headerCell: ({ isAction, borders, alignment, width }) => css({
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: theme.background.hex,
            padding: '1.25rem',
            overflow: 'hidden',
            borderStyle: 'solid',
            borderColor: theme.pale.hex,
            justifyContent: alignment,
            borderWidth: getBorders(borders),
            fontSize: '0.875rem',
            color: theme.lowlight.hex,
            fontWeight: 600,
            lineHeight: '1rem',
        }, isAction && {
            padding: 0
        }, width && {
            flexBasis: width + 'px'
        }, !width && {
            flex: 1
        }),
    }
}

export const subHeaderStyles = ({ hideHeaders }) => {
    const theme = useTheme().theme;

    return {
        subheader: css({
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