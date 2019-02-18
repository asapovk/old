import { css } from '@emotion/core';
import { useTheme, useTypography } from '../../hooks';
import { NONAME } from 'dns';

export default (multiline, size, disabled, decoration) => {

    const theme = useTheme().theme;
    const typography = useTypography();

    const sizes = getSizes(size, decoration);

    return {
        container: css(
            {
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
                border: '1px solid ' + theme.pale.hex,
                backgroundColor: theme.interface.rgb,
                borderRadius: theme.radius.default,
                overflow: 'hidden'
            },
            decoration === 'borderBottom' && {
                border: 'none',
                borderBottom: '1px solid ' + theme.pale.hex,
                backgroundColor: 'none'
            },
            decoration === 'borderless' && {
                border: 'none'
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

function getSizes(size, decoration) {
    switch (size) {
        case 'large':
            return {
                inputHeight: decoration != 'borderless'
                    ? 'calc(2.75rem - 2px)'
                    : '2.75rem',
                inputPadding: !decoration
                    ? '0 0.75rem'
                    : '0',
                textareaPadding: '0.75rem',
                iconSize: '1.25rem',
                labelSize: 2,
                textSize: 1,
                iconMargin: '0.75rem'

            };
        case 'small':
            return {
                inputHeight: decoration != 'borderless'
                    ? 'calc(1.75rem - 2px)'
                    : '1.75rem',
                inputPadding: !decoration
                    ? '0 0.5rem'
                    : '0',
                textareaPadding: '0.5rem',
                iconSize: '0.75rem',
                labelSize: 4,
                textSize: 3,
                iconMargin: '0.5rem'
            };
        default:
            return {
                inputHeight: decoration != 'borderless'
                    ? 'calc(2rem - 2px)'
                    : '2rem',
                inputPadding: !decoration
                    ? '0 0.5rem'
                    : '0',
                textareaPadding: '0.5rem',
                iconSize: '1rem',
                labelSize: 3,
                textSize: 2,
                iconMargin: '0.5rem'
            }
    }
}