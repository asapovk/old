import { CSSProperties } from "react";
import { ThemeInterface } from "..";

export default (theme: ThemeInterface) => {
    return {
        main: (active?: boolean) => {
            let style: CSSProperties = {
                background: theme.interface.rgb,
                boxShadow: theme.shadows.card,
                borderRadius: theme.radius.card,
                color: theme.text.rgb,
                border: "1px solid",
                borderColor: theme.pale.rgba(1)
            };

            if (active) {
                style = {
                    ...style,
                    backgroundColor: theme.gradient.card[0],
                    background: "linear-gradient(80deg," + theme.gradient.card[0] + "," + theme.gradient.card[1] + ")",
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
