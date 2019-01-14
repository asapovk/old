import { css } from '@emotion/core';
import { useTheme, useTypography, useBrowser } from '../../hooks';
import Types from './types';

export default (visible: boolean, position: Types.Position | undefined, targetCoord: Types.TargetCoordinates, popupRef: any) => {

    const theme = useTheme().theme;
    const typography = useTypography();

    const popupHeight: number = popupRef.current && popupRef.current.offsetHeight || 0;
    const popupWidth: number = popupRef.current && popupRef.current.offsetWidth || 0;

    return {
        wrapper: css({
            pointerEvents: visible ? "none" : "auto"
        }),

        popup: css({
            background: theme.interface.rgb,
            boxShadow: `0px 2px 4px 0px ${theme.shadow.rgb}`,
            position: "absolute",
            borderWidth: "0.5px",
            borderStyle: "solid",
            borderColor: theme.pale.rgb,
            padding: "0.5rem 1rem",
            color: theme.text.rgb,
            fontSize: ".875rem",
            borderRadius: "0.25rem",
            visibility: "hidden",
            opacity: 0,
            pointerEvents: "none",
            transition: "all .2s ease-in-out",
            ...getPosition(position, targetCoord, popupHeight, popupWidth)
        },
            visible && {
                opacity: 1,
                visibility: "visible",
                pointerEvents: "auto"
            })
    }
}

function getPosition(initialPosition: Types.Position | undefined, targetCoord: Types.TargetCoordinates, popupHeight: number, popupWidth: number) {
    const browser = useBrowser();

    let position = {
        top: 0,
        left: 0
    };

    const posTop = browser.height / 2 > targetCoord.top;
    const posLeft = browser.width / 2 > targetCoord.left;

    switch (initialPosition) {
        case 'bottom-right':
            position = { top: 0, left: 0 };
            break;
        case 'bottom-center':
            position = { top: 0, left: 0 };
            break;
        case 'top-left':
            position = { top: 0, left: 0 };
            break;
        case 'top-right':
            position = { top: 0, left: 0 };
            break;
        case 'top-center':
            position = { top: 0, left: 0 };
            break;
        case 'left-top':
            position = { top: 0, left: 0 };
            break;
        case 'left-middle':
            position = { top: 0, left: 0 };
            break;
        case 'left-bottom':
            position = { top: 0, left: 0 };
            break;
        case 'right-top':
            position = { top: 0, left: 0 };
            break;
        case 'right-middle':
            position = {
                top: targetCoord.top + Math.round((targetCoord.bottom - targetCoord.top) / 2) - popupHeight / 2,
                left: targetCoord.right + 20
            };
            break;
        case 'right-bottom':
            position = { top: 0, left: 0 };
            break;
        default:
            position = {
                top: posTop ? targetCoord.bottom + 5 : targetCoord.top - 5 - popupHeight,
                left: posLeft ? targetCoord.left : targetCoord.right - popupWidth
            };
    }

    return position;
}