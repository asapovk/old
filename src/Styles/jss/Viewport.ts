import { CSSProperties } from "react";
import { ThemeInterface } from "..";

export default (theme: ThemeInterface) => {
    return {
        main: {
            background: theme.background.rgb,
            color: theme.text.rgb
        }
    }
}