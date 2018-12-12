import { css } from '@emotion/core';
import useTheme from '../hooks/useTheme';
import useTypography from '../hooks/useTypography';

export default (size, loading, disabled, labelCase, decoration, inversion) => {

    const typography = useTypography();

    return css(
        {
            ...getDecoration(decoration, inversion),
            ...typography.caption[2],
            height: '2rem',
            fontWeight: 'bold',
            position: 'relative',
            outline: 'none',
            cursor: 'pointer',
            userSelect: 'none',
            '&:active': {
                boxShadow: 'none !important'
            }
        },

        size === 'small' && {
            height: '1.75rem',
            ...typography.caption[3]
        },

        size === 'large' && {
            height: '2.75rem',
            padding: '0 1.5rem',
            ...typography.caption[1]
        },

        disabled && {
            opacity: 0.5,
            cursor: 'not-allowed !important'
        },

        loading && css`
            > span:first-child{
                filter: blur(1px);
                opacity: 0.4;
            }
            > span:last-child{
                position: absolute;
                left: 50%;
                margin-left: -0.5rem;
                > svg {
                    font-size: 1rem;
                }
            }
        `,

        labelCase && {
            textTransform: 'uppercase'
        }
    )
}

function getDecoration(decoration, inversion) {

    const theme = useTheme().theme;

    let padding = '0 1rem';
    let background = theme.interface.rgb;
    let boxShadow = theme.shadows.button;
    let borderRadius = theme.radius.button;
    let color = decoration ? theme.textOnAccent.rgb : theme.text.rgb;
    let border = 'none';

    switch (decoration) {
        case 'highlight':
            background = theme.highlight.rgb;
            break;
        case 'red':
            background = theme.accents.red.rgb
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
        case 'grayscale':
            background = theme.highlight.grayscale
            break;
        case 'none':
            background = 'none';
            border = 'none';
            boxShadow = 'none';
            padding = '0';
            color = theme.text.rgb;
            break;
        default:
            border = theme.borders.button.width + ' ' + theme.borders.button.style + ' ' + theme.borders.button.color;
    }

    if (inversion) {
        color = background;
        background = theme.interface.rgb;
        border = theme.borders.button.width + ' ' + theme.borders.button.style + ' ' + theme.borders.button.color;
    }

    return {
        padding, background, boxShadow, borderRadius, color, border
    }

}