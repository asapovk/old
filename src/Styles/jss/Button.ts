import { CSSProperties } from "react";

export default (theme) => {
    return {
        main: (decoration?: string, inversion?: boolean) => {
            let style: CSSProperties = {
                background: theme.interface.rgb,
                boxShadow: theme.shadows.button,
                borderRadius: theme.radius.button,
                color: decoration ? theme.textOnAccent.rgb : theme.text.rgb,
                border: "1px solid",
                borderColor: theme.pale.rgb
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

            if (inversion) {
                style = {
                    ...style,
                    background: theme.interface.rgb,
                    color: style.background
                } as CSSProperties
            }
            return style;
        }
    }
}
