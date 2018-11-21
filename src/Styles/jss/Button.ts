import { CSSProperties } from "react";

export default (theme) => {
    return {
        main: (decoration?: string) => {
            const style: CSSProperties = {
                background: theme.interface.rgb,
                boxShadow: theme.shadows.button,
                borderRadius: theme.radius.button,
                color: decoration ? theme.textOnAccent.rgb : theme.text.rgb,
                fontWeight: 500,
                borderColor: theme.pale.rgba(0)
            };
            switch (decoration) {
                case 'highlight':
                    style.background = theme.highlight.rgb
                    break;
                case 'red':
                    style.background = theme.accents.red.rgb
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
                case 'grayscale':
                    style.background = theme.highlight.grayscale
                    break;
                case 'none':
                    style.background = 'none';
                    style.border = 'none';
                    style.boxShadow = 'none';
                    style.padding = 0;
                    style.color = theme.text.rgb;
                    break;
            }
            return style;
        }
    }
}
