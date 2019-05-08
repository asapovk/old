import { ThemeInterface } from "..";

export default (theme: ThemeInterface) => {
    return {
        background: theme.background2.rgb,
        labelColor: theme.lowlight.rgb,
        textColor: theme.text.rgb,
        borderColor: theme.pale.rgb,
        SelectMenuItem: {
            text: theme.text.rgb,
            background: theme.pale.rgba(0.5)
        }
    }
}