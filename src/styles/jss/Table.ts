import { CSSProperties } from "react";
import { ThemeInterface } from '..';

export default (theme: ThemeInterface) => {
    return {
        main: {
            backgroundColor: theme.interface.rgb,
            titleColor: theme.lowlight.rgb,
            borderColor: theme.borders.table.borderColor,
            borderRadius: theme.borders.table.borderRadius,
            boxShadow: theme.shadows.table
        },
        row: {
            backgroundColor: theme.interface.rgb,
            borderColor: theme.pale.rgb,
        },
        actions: {
            backgroundColor: theme.interface.rgb,
            actionColor: theme.highlight.rgb,
        },
        form: {
            backgroundColor: theme.background.rgb,
            borderColor: theme.pale.rgb,
        },
        pagination: {
            textColor: theme.text.rgb,
            backgroundColor: theme.interface.rgb,
        }
    }
}