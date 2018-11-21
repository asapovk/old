import { ThemeInterface } from "..";

export default (theme: ThemeInterface) => {
    let backgroundColor = theme.background.hex;
    let titleColor = theme.text.hex;

    if (theme.name === "gazprom") {
        titleColor = "#fff";
        backgroundColor = "#000";
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
        }
    }
}