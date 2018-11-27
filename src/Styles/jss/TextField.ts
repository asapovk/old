import { CSSProperties } from "react";
import { ThemeInterface } from "..";

export default (theme: ThemeInterface) => {
    return {
        textColor: theme.text.rgb,
        backgroundColor: theme.interface.rgb,
        borderColor: theme.pale.rgb,
        iconColor: theme.lowlight.rgb,
        label: {
            color: theme.lowlight.rgb
        },
        singleline: {
            field: {
                borderColor: theme.pale.rgb,
                backgroundColor: theme.interface.rgb,
                borderRadius: theme.radius.default
            },
            input: {
                color: theme.text.rgb
            },
            placeholder: {
                color: theme.lowlight.rgb
            }
        },
        hint: {
            color: theme.lowlight.rgb
        }
    }
}