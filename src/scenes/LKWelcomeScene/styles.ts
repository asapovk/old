import { css } from '@emotion/core';
import { useTheme, useTypography } from '../../hooks';

export default () => {
    const theme = useTheme().theme;
    const typography = useTypography();
    const context = getThemedStyles(theme);
    const maxWidth = '1200px';

    return {
        login: {
            container: css({
                minWidth: '36rem'
            }),
            wrapper: css({
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                minWidth: '36rem',
                justifyContent: 'center'
            }),
            title: css({
                color: context.titleColor,
                marginBottom: '2.75rem',
                ...typography.display[1]
            }),
            logo: css({
                height: '4.5rem',
                marginBottom: '2.75rem',
            }),
            welcome: css({
                maxWidth: '26rem',
                marginTop: '5rem'
            }),
            actions: {
                container: css({
                    paddingTop: '4rem',
                    '> div:not(:last-child)': {
                        marginRight: '1.25rem',
                    }
                }),
                item: css({
                    padding: '1.5rem 0.5rem',
                    border: '1px solid ' + theme.pale.rgb,
                    borderRadius: theme.radius.card,
                }),
                icon: css({
                    marginBottom: '1.5rem',
                    fontSize: '4rem',
                    color: theme.pale.hex,
                    alignItems: 'center',
                    justifyContent: 'center',
                }),
                label: css({
                    color: theme.highlight.hex,
                    ...typography.text[1]
                }),
            }
        },
        story: {
            main: css({
                background: 'linear-gradient(45deg, #3023AE 0%, #C86DD7 100%)',
                backgroundAttachment: 'fixed',
                color: theme.textOnAccent.rgb,
                padding: '5rem',
                flex: 1
            }),
        },
        form: {
            submitButton: css({
                width: "100%"
            }),

            secondaryButton: css({
                width: "100%",
                background: context.secondaryButtonBackground
            }),

            backButton: css({
                position: "absolute",
                left: "-2rem",
                top: "0.4rem"
            }),

            backButtonIcon: css({
                color: context.backButtonColor
            }),
        }
    }
}

function getThemedStyles(theme) {
    let backgroundColor = theme.background.hex;
    let titleColor = theme.text.hex;
    let backButtonColor = theme.text.hex;
    let secondaryButtonBackground = theme.highlight.grayscale;

    if (theme.name === "gazpromTheme") {
    }

    if (theme.name === "whiteCurrant") {
    }

    return { backgroundColor, titleColor, backButtonColor, secondaryButtonBackground }
}