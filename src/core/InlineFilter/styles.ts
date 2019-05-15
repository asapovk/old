/**
 * styles.tsx
 * author: I.Trikoz
 */
import { css } from '@emotion/core'
import useTheme from '../../hooks/useTheme'

interface StyleParams {
    rowsCount: number
    hasTitle: boolean
}

export default (params: StyleParams) => {
    const theme = useTheme().theme
    const rowsHeight = (params.rowsCount * 1.75 - 0.5) || 0;
    const containerHeight = rowsHeight + (params.hasTitle ? 3 : 0) || 0;

    return css({
        width: '100%',
        overflowY: 'hidden',
        height: `calc(${containerHeight}rem + 1px)`,
        '> div': {
            position: 'relative',
            width: '100%',
            overflowX: 'auto',
            overflowY: 'hidden',
            height: `calc(${rowsHeight}rem + 22px)`,
            '> div': {
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }
        },
        '> span': {
            fontSize: '0.875rem',
            lineHeight: '1rem',
            display: 'inline-block',
            color: theme.lowlight.hex,
            width: '100%',
            paddingBottom: '0.75rem',
            marginBottom: '0.75rem',
            borderBottom: `1px dashed ${theme.lowlight.rgba(.2)}`,
        }
    })
}