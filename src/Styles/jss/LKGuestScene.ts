import { ThemeInterface } from "..";
import { CSSProperties } from "react";

export default (theme: ThemeInterface) => {
    let backgroundColor = theme.background.hex;
    let titleColor = theme.text.hex;
    let backButtonColor = theme.text.hex;

    if (theme.name === "gazprom") {
        titleColor = "#fff";
        backgroundColor = "#000";
        backButtonColor = "#fff";
    }

    return {
        main: {
            backgroundColor,
            titleColor
        },

        submitButton: {
            width: "100%"
        },

        secondaryButton: {
            width: "100%",
            background: theme.pale.hex
        },

        backButton: {
            position: "absolute",
            left: "-2rem",
            top: "0.4rem"
        } as CSSProperties,

        backButtonIcon: {
            color: backButtonColor
        },
    }
}