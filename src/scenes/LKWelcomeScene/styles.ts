import { css } from '@emotion/core';
import { useTheme, useTypography, useBrowser } from '../../hooks';

export default () => {

    const theme = useTheme().theme;
    const typography = useTypography();
    const context = getThemedStyles(theme);

    const breakpoints = [414, 768, 1024]

    const mq = breakpoints.map(
        bp => `@media (max-width: ${bp}px)`
    )

    return {
        container: css({
            minHeight: '100%',
            [mq[1]]: {
                flexDirection: 'column'
            }
        }),
        login: {
            container: css({
                flexBasis: '36rem',
                justifyContent: 'center',
                height: 'fit-content',
                minHeight: '100vh',
                position: 'sticky',
                bottom: 0,
                alignSelf: 'flex-end',
                [mq[1]]: {
                    flexBasis: 'auto',
                    alignSelf: 'auto',
                }
            }),
            welcome: css({
                maxWidth: '26rem',
                minWidth: '17.5rem',
                margin: '4rem',
                [mq[0]]: {
                    margin: '2.5rem 1.25rem',
                },
                [mq[1]]: {
                    maxWidth: 'max-content',
                }
            }),
            logo: css({
                maxHeight: '4rem',
                maxWidth: '12rem',
            }),
            title: css({
                color: context.titleColor,
                margin: '2.5rem 0',
                ...typography.display[1]
            }),
            actions: {
                container: css({
                    paddingTop: '4rem',
                    flex: 1,
                    alignItems: 'flex-end'
                }),
                wrapper: css({
                    height: 'fit-content',
                    width: '100%',
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
            container: css({
                background: 'linear-gradient(45deg, #3023AE 0%, #C86DD7 100%)',
                backgroundAttachment: 'fixed',
                color: theme.textOnAccent.rgb,
                padding: '5rem',
                flex: 1,
                minWidth: '24rem',
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