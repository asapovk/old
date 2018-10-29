import { CSSProperties } from "react";

export default (theme) => {
    return {

        container: {
            position: "relative",
            display: "inline-block",
        } as CSSProperties,

        main: (color?: string, top: number | string = -12, right: number | string = -12, left: number | string = 'auto') => {
            const style: CSSProperties = {
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
                background: theme.interface.rgb,
                boxShadow: '0px 2px 6px 0px ' + theme.shadow.rgb,
                borderRadius: 24,
                color: theme.textOnAccent.hex,
                fontSize: '0.8rem',
                fontWeight: 600,
                borderColor: theme.pale.rgba(0)
            };
            switch (color) {
                case 'highlight':
                    style.background = theme.highlight.rgb
                    break;
                case 'green':
                    style.background = theme.accents.green.rgb
                    break;
                case 'orange':
                    style.background = theme.accents.orange.rgb
                    break;
                case 'blue':
                    style.background = theme.accents.blue.rgb
                    break;
                case 'red':
                default:
                    style.background = theme.accents.red.rgb
                    break;
            }
            return style;
        }
    }
}
