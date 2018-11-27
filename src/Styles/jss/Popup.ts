import { CSSProperties } from "react";
import { ThemeInterface } from "..";

export default (theme: ThemeInterface) => {
    return {
        color: theme.text.rgb,
        shadowColor: theme.shadow.rgb,
        borderColor: theme.pale.rgb,
        background: theme.interface.rgb
    }
}