import { CSSProperties } from "react";
import { ThemeInterface } from "..";

export default (theme: ThemeInterface) => {
    return {
        background: theme.interface.rgb,
        borderColor: `rgba(${theme.pale.rgb}, 1)`,
        lowlight: theme.lowlight.rgb,
        highlight: theme.highlight.rgb
    }
}
