import { css } from '@emotion/core';
import { useTheme } from '../../hooks';

export default () => {

    const theme = useTheme().theme;

    const breakpoints = [414, 960, 1280, 550]

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
        form: {
            container: css({
                flexBasis: '32rem',
                flexShrink: 0,
                justifyContent: 'center',
                height: 'fit-content',
                minHeight: '100vh',
                position: 'sticky',
                bottom: 0,
                alignSelf: 'flex-end',
                [mq[1]]: {
                    flexBasis: 'auto',
                    alignSelf: 'auto',
                    minHeight: 'auto',
                }
            }),
            welcome: css({
                width: '100%',
                maxWidth: '25rem',
                padding: '4rem 4rem 2rem 4rem',
                [mq[1]]: {
                    padding: '4rem',
                },
                [mq[0]]: {
                    padding: '2.5rem 1.25rem',
                }
            }),
            logo: css({
                maxHeight: '3.5rem',
                maxWidth: '12rem',
                marginBottom: '4rem',
                [mq[1]]: {
                    alignSelf: 'center',
                }
            }),
            actions: {
                container: css({
                    paddingTop: '2.5rem',
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
                    cursor: 'pointer',
                    justifyContent: 'flex-start'
                }),
                icon: css({
                    fontSize: '2rem',
                    color: theme.light.hex,
                    alignItems: 'center',
                    justifyContent: 'center',
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
                [mq[2]]: {
                    padding: '5rem 2rem 2rem 2rem'
                },
                [mq[3]]: {
                    padding: 0
                },
            }),
        }
    }
}