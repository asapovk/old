import { css } from '@emotion/core';
import useTheme from '../hooks/useTheme';
import useTypography from '../hooks/useTypography';

export default (active?: boolean) => {

    const theme = useTheme().theme;
    const typography = useTypography();

    return {
        main: css(
            {
                background: theme.interface.rgb,
                boxShadow: theme.shadows.card,
                borderRadius: theme.radius.card,
                color: theme.text.rgb,
                border: "1px solid",
                borderColor: theme.pale.rgba(1),
                userSelect: 'none',
                padding: '1.25rem',
                height: '160px',
                minWidth: '280px',
                marginBottom: '1.25rem',
                overflow: 'hidden',
                willChange: 'height',
                boxSizing: 'border-box',
                transition: 'all .3s'
            },
            active && {
                background: "linear-gradient(80deg," + theme.gradient.card[0] + "," + theme.gradient.card[1] + ")",
                border: 'none',
                color: theme.textOnAccent.rgb,
                borderColor: theme.pale.rgba(0),
                transform: 'translateX(20px)',
                marginRight: '-20px',
                height: '180px',
                '@media (max-width: 640px)': {
                    transform: 'translateX(0)'
                }
            }
        ),
        animation: {
            wave: {
                1: css(
                    {
                        transition: 'transform 3s',
                        willChange: 'transform',
                        transform: 'translateX(-300px)'
                    },
                    active && {
                        transform: 'translateX(0)'
                    }
                ),
                2: css(
                    {
                        transition: 'transform 2s',
                        willChange: 'transform',
                        transform: 'translateX(-630px)'
                    },
                    active && {
                        transform: 'translateX(0)'
                    }
                ),
            },
            circle: {
                1: css(
                    {
                        transition: 'transform 2s',
                        willChange: 'transform',
                        transform: 'translateX(0px) translateY(0px)'
                    },
                    active && {
                        transform: 'translateX(-50px) translateY(50px)'
                    }
                ),
                2: css(
                    {
                        transition: 'transform 3s',
                        willChange: 'transform',
                        transform: 'translateX(0px) translateY(0px)'
                    },
                    active && {
                        transform: 'translateX(-120px) translateY(120px)'
                    }
                ),
            }
        },
        color: active ? theme.textOnAccent.rgb : theme.text.rgb,
    }
}