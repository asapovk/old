import { css } from '@emotion/core';
import useTheme from '../../hooks/useTheme';
import useTypography from '../../hooks/useTypography';

export default (props) => {
    const theme = useTheme().theme;
    const { decoration, color, size, disabled, loading, labelSize, labelCase, labelWight } = props;

    const decorations = getDecoration(decoration, color, size, labelSize, disabled);

    return {
        button: css({
            ...decorations,
            fontWeight: 'bold',
            position: 'relative',
            outline: 'none',
            cursor: 'pointer',
            userSelect: 'none',
            overflow: 'hidden',
            ...(labelWight && {
                fontWeight: labelWight
            }),
            ...(labelCase && {
                textTransform: labelCase
            }),
            ...(disabled && {
                // opacity: 0.5,
                background: theme.disabled.hex,
                boxShadow: 'none',
                color: 'rgb(163,163,163)',
                cursor: 'not-allowed !important',
            }),
        }),

        children: css({
            display: 'inline-block',
            position: 'relative',
            transition: 'all .3s ease',
            transform: 'scale(1)',
            opacity: 1,
            ...(loading && {
                transform: 'scale(1.75)',
                opacity: 0
            })
        }),

        loading: css({
            position: 'absolute',
            pointerEvents: 'none',
            top: '50%',
            left: '50%',
            marginLeft: '-2rem',
            marginTop: '-2rem',
            display: 'inline-block',
            visibility: 'hidden',
            opacity: 0,
            transform: 'scale(0.1)',
            transition: 'all .3s ease',
            ...(loading && {
                transform: `scale(${decorations.loadingScale})`,
                visibility: 'visible',
                opacity: 1,
            })
        }),

    }
}

function getDecoration(decoration, color, size, labelSize, disabled) {

    const theme = useTheme().theme;
    const typography = useTypography();

    let height = '2rem';
    let padding = '0 1rem';
    let textStyles = typography.caption[2];
    let background = theme.interface.rgb;
    let boxShadow = theme.shadows.button.default;
    let borderRadius = theme.borders.button.borderRadius;
    let textColor = theme.text.rgb;
    let outlineColor = theme.text.rgb;
    let border = `${theme.borders.button.borderWidth} ${theme.borders.button.borderStyle} ${theme.borders.button.borderColor}`;
    let filter;
    let loadingScale = 0.3;

    switch (color) {
        case 'highlight':
            background = theme.highlight.rgb;
            textColor = theme.textOnAccent.rgb;
            outlineColor = background;
            border = 'none';
            break;
        case 'brand-red':
            background = theme.brandColors.red.hex;
            textColor = theme.textOnAccent.rgb;
            outlineColor = background;
            border = 'none';
            break;
        case 'brand-purple':
            background = theme.brandColors.purple.hex;
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
            loadingScale = 0.25;
            break;
        case 'large':
            height = '2.75rem';
            padding = '0 1.5rem';
            textStyles = typography.caption[1];
            loadingScale = 0.4;
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
        transition: 'all .1s ease-in-out',
        willChange: 'box-shadow',
        '&:active': {
            // boxShadow: 'none !important',
            boxShadow: disabled
                ? 'none'
                : !decoration
                    ? theme.shadows.button.active
                    : 'none',
            border
        }
    }

    return {
        filter, padding, loadingScale, background, boxShadow, borderRadius, color: textColor, border, height, ...textStyles, ...pseudo
    }

}