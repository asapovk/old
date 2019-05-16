import { CSSProperties } from "react";
import { ThemeInterface } from '..';

export default (theme: ThemeInterface) => {
    return {
        main: {
            textColor: theme.text.rgb,
            backgroundColor: theme.background.rgb,
            borderColor: theme.pale.rgb
        },
        filter: {
            backgroundColor: theme.background.rgb,
            inputBackground: theme.interface.rgb,
            borderColor: theme.pale.rgb,
            color: theme.text.rgb
        },
        nav: {
            badgeColor: theme.highlight.rgb
        }
    }
}