
import { css } from '@emotion/core';
import useTheme from '../hooks/useTheme';
import useTypography from '../hooks/useTypography';

export default (color?: string, top: number | string = -12, right: number | string = -12, left: number | string = 'auto') => {

    const theme = useTheme().theme;
    const typography = useTypography();

    return {
        container: css({
            position: 'relative',
            display: 'inline-block'
        }),

        main: css({
            ...typography.caption[3],
            position: "absolute",
            zIndex: 10,
            top: top,
            right: right,
            left: left,
            padding: '0 0.5rem',
            minWidth: '1.5rem',
            minHeight: '1.5rem',
            boxSizing: "border-box",
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            background: getBackground(color, theme),
            boxShadow: '0px 2px 6px 0px ' + theme.shadow.rgb,
            borderRadius: 24,
            color: theme.textOnAccent.hex,
            fontWeight: 600,
            borderColor: theme.pale.rgba(0)
        })
    }
}

function getBackground(color, theme) {

    let background = theme.interface.rgb;

    switch (color) {
        case 'highlight':
            background = theme.highlight.rgb
            break;
        case 'green':
            background = theme.accents.green.rgb
            break;
        case 'orange':
            background = theme.accents.orange.rgb
            break;
        case 'blue':
            background = theme.accents.blue.rgb
            break;
        case 'red':
        default:
            background = theme.accents.red.rgb
            break;
    }
    return background;
}