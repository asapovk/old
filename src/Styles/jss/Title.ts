import { CSSProperties } from "react";
import { ThemeInterface } from "..";

export default (theme: ThemeInterface) => {
    return {
        active: {
            color: theme.highlight.rgb
        }
    }
}