import { css } from '@emotion/core';
import { useTheme } from '../../hooks';

export default ({ multiline, size, disabled, decoration, floatingLabel, leftIcon }) => {

    const theme = useTheme().theme;
    const extraParams = getExtraParams(size, decoration, leftIcon);

    return {
        container: css({
            flex: 1,
            cursor: 'default'
        }, disabled && {
            opacity: .5
        }),

        label: css({
            fontSize: extraParams.labelSize,
            lineHeight: extraParams.labelLineHeight,
            marginBottom: '0.25rem',
            color: theme.lowlight.rgb
        }),

        floatingLabel: (minified: boolean) => css({
            position: 'absolute',
            pointerEvents: 'none',
            top: 0,
            left: 0,
            transition: 'all .2s ease-in-out',
            color: theme.lowlight.rgb,
            transform: `translate(${extraParams.floatingLabelTranslate.start}) scale(1)`,
            transformOrigin: 'top left',
            fontSize: extraParams.textSize,
            lineHeight: extraParams.textLineHeight,
        }, minified && {
            color: theme.lowlight.rgb,
            transform: `translate(${extraParams.floatingLabelTranslate.end}) scale(0.75)`,
        }),

        wrapper: css({
            border: '1px solid ' + theme.pale.hex,
            backgroundColor: theme.interface.rgb,
            borderRadius: theme.radius.default,
            overflow: 'hidden',
            boxSizing: 'border-box'
        }, decoration === 'borderBottom' && {
            border: 'none',
            borderBottom: '1px solid ' + theme.pale.hex,
            backgroundColor: 'none'
        }, decoration === 'borderless' && {
            border: 'none'
        }, multiline
                ? {
                    height: '100%',
                    padding: `${extraParams.textareaPadding}`
                }
                : {
                    height: extraParams.inputHeight,
                    padding: `0 ${extraParams.inputPadding}`
                },
        ),

        field: css({
            height: '100%',
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
            fontWeight: 700,
            transform: 'translateY(0)',
            fontSize: extraParams.textSize,
            lineHeight: extraParams.textLineHeight,
            marginTop: floatingLabel ? extraParams.inputMargin : 0,
            '::placeholder': {
                color: theme.lowlight.rgb,
                fontWeight: 'normal'
            }
        }),

        icon: (position: any = null) => css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.lowlight.rgb,
            fontSize: extraParams.iconSize,
        }, !position
                ? { fontSize: extraParams.loadingSize }
                : position === 'left'
                    ? { marginRight: extraParams.iconMargin }
                    : { marginLeft: extraParams.iconMargin }
        )
    }
}

function getExtraParams(size, decoration, leftIcon) {
    switch (size) {
        case 'extra-large':
            return {
                inputHeight: '5rem',
                inputPadding: !decoration ? '1.25rem' : '0',
                textareaPadding: '1.75rem 1.25rem',
                iconSize: '2rem',
                loadingSize: '1.5rem',
                labelSize: '1rem',
                labelLineHeight: '1.25rem',
                textSize: '1.125rem',
                textLineHeight: '1.5rem',
                iconMargin: '1rem',
                inputMargin: '0.75rem',
                floatingLabelTranslate: {
                    start: `calc(${!decoration ? '1.25rem' : '0px'} + ${leftIcon ? '2.5rem' : '0px'}), 1.75rem`,
                    end: `calc(${!decoration ? '1.25rem' : '0px'} + ${leftIcon ? '2.5rem' : '0px'}), 0.75rem`,
                },
            };
        case 'large':
            return {
                inputHeight: '2.75rem',
                inputPadding: !decoration ? '0.75rem' : '0',
                textareaPadding: '0.5rem 0.75rem',
                iconSize: '1.25rem',
                loadingSize: '1.25rem',
                labelSize: '0.875rem',
                labelLineHeight: '1rem',
                textSize: '1rem',
                textLineHeight: '1.5rem',
                iconMargin: '0.75rem',
                inputMargin: '0.75rem',
                floatingLabelTranslate: {
                    start: `calc(${!decoration ? '0.75rem' : '0px'} + ${leftIcon ? '1.75rem' : '0px'}), 0.5rem`,
                    end: `calc(${!decoration ? '0.75rem' : '0px'} + ${leftIcon ? '1.75rem' : '0px'}), 0rem`,
                },
            };
        case 'small':
            return {
                inputHeight: '1.75rem',
                inputPadding: !decoration ? '0.5rem' : '0',
                textareaPadding: '0.5rem',
                iconSize: '0.75rem',
                loadingSize: '0.75rem',
                labelSize: '0.625rem',
                labelLineHeight: '0.75rem',
                textSize: '0.75rem',
                textLineHeight: '1rem',
                iconMargin: '0.5rem',
                inputMargin: '0.25rem',
                floatingLabelTranslate: {
                    start: `${!decoration ? '1.25rem' : '0'}, 1.75rem`,
                    end: `${!decoration ? '1.25rem' : '0'}, 1.75rem`,
                },
            };
        default:
            return {
                inputHeight: '2rem',
                inputPadding: !decoration ? '0.5rem' : '0',
                textareaPadding: '0.5rem',
                iconSize: '1rem',
                loadingSize: '1rem',
                labelSize: '0.75rem',
                labelLineHeight: '0.875rem',
                textSize: '0.875rem',
                textLineHeight: '1.25rem',
                iconMargin: '0.5rem',
                inputMargin: '0.25rem',
                floatingLabelTranslate: {
                    start: `${!decoration ? '1.25rem' : '0'}, 1.75rem`,
                    end: `${!decoration ? '1.25rem' : '0'}, 1.75rem`,
                },
            }
    }
}