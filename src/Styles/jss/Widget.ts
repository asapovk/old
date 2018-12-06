import { ThemeInterface } from "..";

export default (theme: ThemeInterface) => {
    return {
        background: theme.interface.rgb,
        lowlight: theme.lowlight.rgb,
        highlight: theme.highlight.rgb,
        borderRadius: theme.borders.widget.radius
    }
}
