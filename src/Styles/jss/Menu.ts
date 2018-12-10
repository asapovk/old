import { CSSProperties } from "react";
import { ThemeInterface } from "..";

export default (theme: ThemeInterface) => {
    return {
        main: {
            menu: {
                backgroundColor: theme.background.hex,
                borderColor: theme.pale.rgb,
            },
            searchBar: {
                background: theme.interface.rgb,
                borderColor: theme.pale.rgb,
                boxShadow: `0px 2px 4px 0px ${theme.shadow.rgb}`,
                borderRadius: theme.radius.default
            }
        },
        nav: {
            textColor: theme.text.rgb,
            textColorActive: theme.highlight.rgb,
        }
    }
}