import { CSSProperties } from "react";

export default (theme) => {
    return {
        main: (active?: boolean) => {
            let style: CSSProperties = {
                background: theme.interface.rgb,
                boxShadow: theme.shadows.card,
                borderRadius: theme.radius.widget,
                color: theme.text.rgb,
                border: "1px solid",
                borderColor: theme.pale.rgba(1)
            };

            if (active) {
                style = {
                    ...style,
                    background: theme.highlight.rgb,
                    border: 'none',
                    color: style.background,
                    borderColor: theme.pale.rgba(0)
                } as CSSProperties
            }

            return style;
        },
        counter: (active?: boolean) => {
            return {
                color: active ? theme.interface.rgb : theme.highlight.rgb
            }
        }
    }
}
