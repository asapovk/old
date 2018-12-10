import { CSSProperties } from "react";
import { ThemeInterface } from "..";

export default (theme: ThemeInterface) => {
    return {
        root: {
            overflow: "hidden"
        },
        main: {
            // overflow: "hidden"
        },
        sideBackground: {
            background: theme.background.hex,
            borderColor: theme.pale.hex,
        },
        sideBottom: {
            overflow: "scroll",
            marginRight: "-20px",
            marginLeft: "-20px",
        },
        mainRight: {
            overflow: "scroll",
        },
        sideMask: {
            background: `linear-gradient(0deg, ${theme.background.hex}, ${theme.background2.hex} 20%)`
        },

        components: {
            accountSelect: {
                field: {
                    borderColor: theme.pale.hex,
                    background: theme.interface.hex,
                },
                add: {
                    background: theme.highlight.hex,
                },
                addIcon: {
                    fill: theme.textOnAccent.hex,
                },
                accountText: {
                    color: theme.text.hex,
                },

                dropIcon: {
                    height: "2.25rem",
                    marginLeft: "0.75rem",
                    marginRight: "0.75rem",
                }
            }
        }
    }
}