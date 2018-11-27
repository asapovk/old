import { CSSProperties } from "react";
import { ThemeInterface } from "..";

export default (theme: ThemeInterface) => {
    let backgroundColor = theme.background.hex;
    let titleColor = theme.text.hex;
    let backButtonColor = theme.text.hex;
    let secondaryButtonBackground = theme.highlight.grayscale;

    if (theme.name === "gazprom") {
        titleColor = "#fff";
        backgroundColor = "#000";
        backButtonColor = "#fff";
        secondaryButtonBackground = theme.background.rgba(0.2);
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
            background: secondaryButtonBackground
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