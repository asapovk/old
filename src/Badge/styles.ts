
import { css } from '@emotion/core';

export default (theme) => {

    return {
        container: css({
            position: 'relative',
            display: 'inline-block'
        }),

        main: (color?: string, top: number | string = -12, right: number | string = -12, left: number | string = 'auto') => {
            let background = theme.interface.rgb;
            switch (color) {
                case 'highlight':
                    background = theme.highlight.rgb
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
                case 'red':
                default:
                    background = theme.accents.red.rgb
                    break;
            }
            return css({
                position: "absolute",
                zIndex: 10,
                top: top,
                right: right,
                left: left,
                padding: '0 6px',
                minWidth: 24,
                boxSizing: "border-box",
                textAlign: "center",
                display: "inline-block",
                background: background,
                boxShadow: '0px 2px 6px 0px ' + theme.shadow.rgb,
                borderRadius: 24,
                color: theme.textOnAccent.hex,
                fontSize: '0.8rem',
                fontWeight: 600,
                borderColor: theme.pale.rgba(0)
            });
        }
    }
}