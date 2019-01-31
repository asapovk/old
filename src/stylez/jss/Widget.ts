import { ThemeInterface } from "..";

export default (theme: ThemeInterface) => {
    return {
        background: theme.interface.rgb,
        lowlight: theme.lowlight.rgb,
        highlight: theme.highlight.rgb,
        borderRadius: theme.borders.widget.radius,
        borderColor: theme.borders.widget.color,
        borderStyle: theme.borders.widget.style,
        borderWidth: theme.borders.widget.width
    }
}
