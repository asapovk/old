import { CSSProperties } from "react";
import { ThemeInterface } from "..";

export default (theme: ThemeInterface) => {
    return {
        main: {
            backgroundColor: theme.background.rgb
        },
        view: {
            textColor: theme.text.rgb,
            titleColor: theme.text.rgb,
            subtitleColor: theme.lowlight.rgb,
            borderColor: theme.pale.rgb,
            background: theme.interface.rgb,
            borderRadius: theme.radius.window
        }
    }
}