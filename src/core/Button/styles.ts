import { css } from '@emotion/core';
import useTheme from '../../hooks/useTheme';
import useTypography from '../../hooks/useTypography';

export default (props) => {

    const { decoration, color, size, disabled, loading, labelSize, labelCase, labelWight } = props;

    return css(
        {
            ...getDecoration(decoration, color, size, labelSize),
            fontWeight: 'bold',
            position: 'relative',
            outline: 'none',
            cursor: 'pointer',
            userSelect: 'none',
        },

        labelWight && {
            fontWeight: labelWight
        },

        labelCase && {
            textTransform: labelCase
        },

        disabled && {
            opacity: 0.5,
            cursor: 'not-allowed !important',
        },

        loading && css`
            > span:first-of-type{
                filter: blur(1px);
                opacity: 0.4;
            }
            > span:last-of-type{
                position: absolute;
                left: 50%;
                margin-left: -0.5rem;
                > svg {
                    font-size: 1rem;
                }
            }
        `,
    )
}

function getDecoration(decoration, color, size, labelSize) {

    const theme = useTheme().theme;
    const typography = useTypography();

    let height = '2rem';
    let padding = '0 1rem';
    let textStyles = typography.caption[2];
    let background = theme.interface.rgb;
    let boxShadow = theme.shadows.button;
    let borderRadius = theme.radius.button;
    let textColor = theme.text.rgb;
    let outlineColor = theme.text.rgb;
    let border = theme.borders.button.width + ' ' + theme.borders.button.style + ' ' + theme.pale.rgb;
    let filter;

    switch (color) {
        case 'highlight':
            background = theme.highlight.rgb;
            textColor = theme.textOnAccent.rgb;
            outlineColor = background;
            border = 'none';
            break;
        case 'red':
            background = theme.accents.red.rgb;
            textColor = theme.textOnAccent.rgb;
            outlineColor = background;
            border = 'none';
            break;
        case 'green':
            background = theme.accents.green.rgb;
            textColor = theme.textOnAccent.rgb;
            outlineColor = background;
            border = 'none';
            break;
        case 'orange':
            background = theme.accents.orange.rgb;
            textColor = theme.textOnAccent.rgb;
            outlineColor = background;
            border = 'none';
            break;
        case 'blue':
            background = theme.accents.blue.rgb;
            textColor = theme.textOnAccent.rgb;
            outlineColor = background;
            border = 'none';
            break;
        case 'grayscale':
            background = theme.highlight.grayscale;
            textColor = theme.textOnAccent.rgb;
            outlineColor = background;
            border = 'none';
            break;
    }

    switch (decoration) {
        case 'inverse':
            background = [textColor, textColor = background][0];
            break;
        case 'outline':
            border = '1px solid ' + outlineColor;
            textColor = outlineColor;
            boxShadow = 'none';
            background = 'unset';
            break;
        case 'blur':
            textColor = theme.highlight.rgb;
            background = theme.background2.rgb;
            border = 'none';
            boxShadow = 'none';
            break;
        case 'none':
            background = 'none';
            border = 'none';
            boxShadow = 'none';
            padding = '0';
            textColor = theme.text.rgb;
            break;
    }

    switch (size) {
        case 'small':
            height = '1.75rem';
            textStyles = typography.caption[3];
            break;
        case 'large':
            height = '2.75rem';
            padding = '0 1.5rem';
            textStyles = typography.caption[1];
            break;
    }

    switch (labelSize) {
        case 'small':
            textStyles = typography.caption[3];
            break;
        case 'normal':
            textStyles = typography.caption[2];
            break;
        case 'large':
            textStyles = typography.caption[1];
            break;
    }

    let pseudo = {
        '&:active': {
            boxShadow: 'none !important',
            border
        }
    }

    return {
        filter, padding, background, boxShadow, borderRadius, color: textColor, border, height, ...textStyles, ...pseudo
    }

}