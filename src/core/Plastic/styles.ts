
import { css } from '@emotion/core';
import { CSSProperties } from '@emotion/serialize';
import useTheme from '../../hooks/useTheme';
import types from './types';

export default (props: types.StyleProps) => {

    const theme = useTheme().theme;

    const stackCss: CSSProperties = {};
    let stackOffset = 5 + (props.stackOffset || 0);
    let stackDirection = props.stackDirection || 'left';
    let stackShadow = '0rem 0.25rem';

    switch (stackDirection) {
        case 'left':
            break;
        case 'right':
            break;
        case 'top':
            stackOffset = 3.25 + (props.stackOffset || 0);
            break;
        case 'bottom':
            stackOffset = 3.25 + (props.stackOffset || 0);
            break;
    }

    if (props.stackPosition) {
        stackCss[stackDirection] = '0rem';
        stackCss.position = 'absolute';
        stackCss.opacity = props.isActive ? 1 : 0.5;

        if (props.isActive) {
            stackCss.zIndex = 2;
        }
    }
    const stackHovers = () => {
        const hovers: any = {};
        for (let i = 0; (props.stackCount || 0) > i; i++) {
            hovers[`:hover > div:nth-of-type(${i + 1})`] = {
                [stackDirection]: i * stackOffset + 'rem'
            }
        }
        return hovers;
    }

    return {
        stack: css({
            position: 'relative',
            width: '4.75rem',
            height: '3rem',
            ...stackHovers()
        }),
        card: css({
            zIndex: 1,
            position: 'relative',
            width: '4.75rem',
            height: '3rem',
            borderRadius: '0.25rem',
            background: props.cardBackground || theme.highlight.hex,
            cursor: props.isActive ? 'default' : 'pointer',
            boxShadow: (props.isActive ? `${stackShadow} 0.2rem 0rem ` : `0, 0, 0, 0 `) + theme.defaultShadow.hex,
            transition: 'all 0.25s',
            ...stackCss
        }),
        pan: css({
            display: 'block',
            position: 'absolute',
            fontWeight: 600,
            fontSize: '0.85rem',
            color: props.cardColor || theme.textOnAccent.hex,
            width: '100%',
            textAlign: 'right',
            bottom: '0.15rem',
            right: '0.35rem',
        }),
        emptyText: css({
            display: 'block',
            position: 'absolute',
            fontWeight: 600,
            fontSize: '0.85rem',
            color: props.cardColor || theme.textOnAccent.hex,
            width: '100%',
            textAlign: 'center',
            bottom: '0.8rem',
        }),
        type: css({
            display: 'block',
            position: 'absolute',
            top: '0.25rem',
            right: '0.35rem',
            ' polygon': {
                fill: props.cardColor || theme.textOnAccent.hex
            },
            ' path': {
                fill: props.cardColor || theme.textOnAccent.hex
            }
        })
    }
}