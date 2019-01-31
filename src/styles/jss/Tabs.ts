import { CSSProperties } from "react";
import { ThemeInterface } from "..";

export default (theme: ThemeInterface) => {
    return {
        tab: {
            borderRadius: theme.radius.default,
            color: theme.text.hex
        },
        tabActive: {
            borderRadius: theme.radius.default,
            color: theme.interface.hex
        },
        toolbar: {
            borderRadius: theme.radius.default,
            background: theme.interface.hex
        },
        container: {
            borderColor: theme.pale.hex,
            background: theme.interface.hex,
            borderRadius: theme.radius.default,
        },
        hl: {
            borderRadius: theme.radius.default,
            borderColor: theme.interface.hex,
            background: `linear-gradient(80deg,${theme.gradient.default[0]},${theme.gradient.default[1]})`
        }
    }
}
