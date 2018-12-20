
import { css } from '@emotion/core';
import useTheme from '../hooks/useTheme';

export default (horizontal?: boolean, isWebkit?: boolean, hidden?: boolean, width?: number, height?: number) => {
    const { scrollbar } = useTheme().theme;
    return {
        root: css({
            position: 'relative',
            overflow: 'hidden',
            width,
            flex: width ? "inherit" : 1,
            height: height || (!horizontal ? "100%" : "initial"),
        }),

        scrollview: css({
            position: 'relative',
            height: horizontal ? "auto" : "100%",
            overflowX: horizontal ? "scroll" : "hidden",
            overflowY: horizontal ? "hidden" : "scroll",
            marginRight: isWebkit ? 0 : -15,
            marginBottom: (isWebkit && horizontal) ? 0 : -15,
            whiteSpace: horizontal ? "nowrap" : "normal",
            "&::-webkit-scrollbar": {
                display: "none"
            },
        }),

        scrollbar: css({
            position: "absolute",
            borderStyle: 'solid',
            borderRadius: scrollbar.borderRadius,
            borderWidth: scrollbar.borderWidth,
            borderColor: scrollbar.borderColor,
            background: scrollbar.backgroundColor,
            top: horizontal ? 'initial' : 0,
            left: !horizontal ? "initial" : 0,
            bottom: horizontal ? scrollbar.offsetPosition : 0,
            right: !horizontal ? scrollbar.offsetPosition : 0,
            opacity: hidden ? 0 : 1,
            overflow: "hidden",
            visibility: hidden ? "hidden" : "visible",
            transition: "all 0.15s",
        }),
        thumb: css({
            position: "relative",
            borderStyle: 'solid',
            borderRadius: scrollbar.thumb.borderRadius,
            borderWidth: scrollbar.thumb.borderWidth,
            borderColor: scrollbar.thumb.borderColor,
            height: scrollbar.thumb.size,
            width: scrollbar.thumb.size,
            background: scrollbar.thumb.color,
        }),
    }
}