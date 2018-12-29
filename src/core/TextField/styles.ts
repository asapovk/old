import { css } from '@emotion/core';
import { useTheme, useTypography } from '../../hooks';

export default (multiline, size, disabled, decoration) => {

    const theme = useTheme().theme;
    const typography = useTypography();

    const sizes = getSizes(size);

    return {
        container: css(
            {
                height: '100%',
                width: '100%',
                flex: 1,
                cursor: 'default'
            },
            disabled && {
                opacity: .5
            }
        ),

        label: css({
            ...typography.caption[sizes.labelSize],
            // textTransform: 'uppercase',
            marginBottom: '0.25rem',
            color: theme.lowlight.rgb
        }),

        wrapper: css(
            {
                border: decoration != 'borderless'
                    ? '1px solid ' + theme.pale.hex
                    : 'none',
                backgroundColor: theme.interface.rgb,
                borderRadius: theme.radius.default,
                overflow: 'hidden'
            },
            multiline
                ? {
                    height: '100%',
                    padding: sizes.textareaPadding
                }
                : {
                    height: sizes.inputHeight,
                    padding: sizes.inputPadding
                }
        ),

        field: css({
            height: multiline ? '100%' : 'auto',
            width: '100%',
            border: 'none',
            boxSizing: 'border-box',
            background: 'none',
            outline: 'none',
            position: 'relative',
            color: theme.text.rgb,
            fontFamily: 'inherit',
            margin: 0,
            padding: 0,
            resize: 'none',
            '::placeholder': {
                color: theme.lowlight.rgb
            },
            ...typography.text[sizes.textSize],
        }),

        icon: (position) => css(
            {
                color: theme.lowlight.rgb,
                fontSize: sizes.iconSize,
            },
            position === 'left'
                ? {
                    marginRight: sizes.iconMargin
                }
                : {
                    marginLeft: sizes.iconMargin
                }
        ),
    }
}

function getSizes(size) {
    switch (size) {
        case 'large':
            return {
                inputHeight: 'calc(2.75rem - 2px)',
                inputPadding: '0 0.75rem',
                textareaPadding: '0.75rem',
                iconSize: '1.25rem',
                labelSize: 2,
                textSize: 1,
                iconMargin: '0.75rem'

            };
        case 'small':
            return {
                inputHeight: 'calc(1.75rem - 2px)',
                inputPadding: '0 0.5rem',
                textareaPadding: '0.5rem',
                iconSize: '0.75rem',
                labelSize: 4,
                textSize: 3,
                iconMargin: '0.5rem'
            };
        default:
            return {
                inputHeight: 'calc(2rem - 2px)',
                inputPadding: '0 0.5rem',
                textareaPadding: '0.5rem',
                iconSize: '1rem',
                labelSize: 3,
                textSize: 2,
                iconMargin: '0.5rem'
            }
    }
}