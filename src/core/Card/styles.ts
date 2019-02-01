import { css } from '@emotion/core';
import useTheme from '../../hooks/useTheme';
// import useTypography from '../../hooks/useTypography';

export default (active?: boolean) => {

    const theme = useTheme().theme;
    // const typography = useTypography();

    return {
        main: css(
            {
                background: theme.interface.rgb,
                boxShadow: '0 0 0 rgba(0,0,0,0)',
                borderRadius: theme.radius.card,
                color: theme.text.rgb,
                border: "1px solid",
                borderColor: theme.pale.rgba(1),
                userSelect: 'none',
                padding: '1.25rem',
                height: '8rem',
                minWidth: '13rem',
                // marginBottom: '1.25rem',
                overflow: 'hidden',
                willChange: 'height',
                boxSizing: 'border-box',
                transition: 'all .3s'
            },
            active && {
                // background: "linear-gradient(80deg," + theme.gradient.card[0] + "," + theme.gradient.card[1] + ")",
                // border: 'none',
                boxShadow: theme.shadows.card,
                color: theme.textOnAccent.rgb,
                background: theme.interface.rgb,
                // marginLeft: '30px',
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
        color: theme.text.rgb
    }
}