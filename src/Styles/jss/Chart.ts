import { ThemeInterface } from "..";

export default (theme: ThemeInterface) => {
    return {
        text: theme.text.hex,
        accent: theme.highlight.hex,
        background: theme.background.hex,
        chartTextColor: theme.lowlight.hex
    }
}