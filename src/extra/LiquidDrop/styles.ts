import { css } from '@emotion/core';
import { useTheme, useTypography } from '../../hooks';

export default () => {

    const theme = useTheme().theme;

    return {
        title: css({
            pointerEvents: 'none',
            userSelect: 'none',
            position: "absolute",
            right: 27,
            top: 21,
            height: 20,
            width: 40,
            textAlign: 'center',
            color: theme.textOnAccent.hex
        }),
        icon: css({
            pointerEvents: 'none',
            userSelect: 'none',
            position: "absolute",
            right: 27,
            top: 20,
            height: 28,
            width: 40,
            textAlign: 'center',
            color: theme.textOnAccent.hex
        }),
        contentWrapper: css({
            position: 'absolute',
            height: 318,
            width: 320,
            top: 67,
            right: 15,
            borderRadius: 5,
            overflow: 'hidden'
        }),
        content: css({
            paddingLeft: '1.25rem',
        }),
        dot: css({
            display: 'inline-block',
            borderRadius: '1.75rem',
            height: '0.625rem',
            width: '0.625rem',
            background: theme.highlight.hex,
            marginRight: '0.25rem'
        }),
        row: (active: boolean) => css({
            cursor: 'pointer',
            border: 0,
            paddingTop: '1.25rem',
            paddingBottom: '1.25rem',
            borderBottomWidth: 1,
            borderColor: theme.pale.hex,
            borderStyle: 'solid',
            transition: active ? '0.15s' : '0.05s',
            transitionDelay: active ? '0.15s' : '0',
            transform: `translateY(${!active ? '30px' : '0px'}) scale(${!active ? '0.7' : '1'})`,
            transformOrigin: '0 0',
            opacity: active ? 1 : 0,
            visibility: active ? 'visible' : 'hidden',
        })
    }
}