import { css } from '@emotion/core';
import { useTheme, useTypography } from '../../hooks';

export default () => {
    const theme = useTheme().theme;
    const typography = useTypography();
    const context = getThemedStyles(theme);
    const maxWidth = '1200px';

    return {
        main: {
            container: {
                background: context.backgroundColor,
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '75vh',
            },
            title: {
                color: context.titleColor,
                marginBottom: '2.75rem',
                ...typography.display[1]
            },
            logo: {
                height: '4.5rem',
                marginBottom: '2.75rem',
            },
            welcome: {
                width: '20rem',
                marginTop: '8rem',
                marginBottom: '8em'
            },
            wrapper: {
                maxWidth: maxWidth
            }
        },
        footer: {
            main: {
                minHeight: '25vh',
                alignItems: 'center',
                justifyContent: 'center',
            },
            wrapper: {
                maxWidth: maxWidth
            },
            item: {
                marginTop: '5rem',
                marginBottom: '5rem',
            },
            icon: {
                marginBottom: '1.5rem',
                fontSize: '5rem',
                color: theme.lowlight.hex
            },
            label: {
                color: theme.highlight.hex,
                ...typography.text[1]
            },
            separator: {
                borderLeft: '1px solid ' + theme.pale.hex
            }
        },
        form: {
            submitButton: {
                width: "100%"
            },

            secondaryButton: {
                width: "100%",
                background: context.secondaryButtonBackground
            },

            backButton: {
                position: "absolute",
                left: "-2rem",
                top: "0.4rem"
            },

            backButtonIcon: {
                color: context.backButtonColor
            },
        }
    }
}

function getThemedStyles(theme) {
    let backgroundColor = theme.background.hex;
    let titleColor = theme.text.hex;
    let backButtonColor = theme.text.hex;
    let secondaryButtonBackground = theme.highlight.grayscale;

    if (theme.name === "gazpromTheme") {
        titleColor = "#fff";
        backgroundColor = "#000";
        backButtonColor = "#fff";
        secondaryButtonBackground = theme.background.rgba(0.2);
    }

    return { backgroundColor, titleColor, backButtonColor, secondaryButtonBackground }
}