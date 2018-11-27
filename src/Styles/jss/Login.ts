import { CSSProperties } from "react";
import { ThemeInterface } from "..";

export default (theme: ThemeInterface) => {
    return {
        textColor: theme.text.rgb,
        textShadow: `0px 1px 6px rgba(${theme.shadow.rgb}, 0.5)`
    }
}