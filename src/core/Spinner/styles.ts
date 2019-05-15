import { css, keyframes } from '@emotion/core';
import useTheme from '../../hooks/useTheme';
import { themes } from '../../styles';

export default (dark?: boolean, color?: string) => {

    const theme = useTheme().theme;

    const containerRadius = 30;
    const circleRadius = 20;

    const edge = containerRadius * Math.sin(2 * Math.PI / 3) / Math.sin(Math.PI / 6);
    const height = edge * Math.sin(2 * Math.PI / 3);

    const spinnerAnimation = keyframes({
        "0%": { opacity: 1 },
        "100%": { opacity: 0 }
    });

    const circleScale = keyframes({
        "0%": { transform: `scale(1)` },
        "40%": { transform: `scale(0.7)` },
        "80%": { transform: `scale(1.2)` },
        "100%": { transform: `scale(1)` },
    });

    const spin = keyframes({
        to: { transform: 'rotate(360deg)' }
    });

    return {
        spinner: css({
            display: "inline-block",
            position: "relative",
            width: "4rem",
            height: "4rem",
            "> div": {
                transformOrigin: "2rem 2rem",
                animation: `${spinnerAnimation} 1.2s linear infinite`,
                "&::after": {
                    content: `''`,
                    display: "block",
                    position: "absolute",
                    top: "3px",
                    left: "29px",
                    width: "5px",
                    height: "14px",
                    borderRadius: "20%",
                    opacity: 1,
                    background: color ? theme[color].hex : theme.text.hex,
                },
            }
        }),

        centeredContainer: css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999999,
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }, dark && {
            "&::before": {
                content: `''`,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, .1)'
            }
        }),

        container: css({
            height: containerRadius * 2,
            width: containerRadius * 2
        }),

        circle: (index: number) => css({
            position: 'absolute',
            width: circleRadius * 2,
            height: circleRadius * 2,
            backgroundColor: 'red',
            borderRadius: '50%',
            animation: `${circleScale} 3s linear infinite`,
            animationDelay: `${index * 2}s`
        }),

        triangleContainer: css({
            position: 'relative',
            height: containerRadius * 2,
            width: containerRadius * 2,
            animation: `${spin} 3s linear infinite`,
            "> div": {
                position: 'relative',
                top: 0,
                left: containerRadius - edge / 2,
                height: 0,
                width: 0,
                borderStyle: 'solid',
                borderWidth: `0 ${edge / 2}px ${height}px`,
                borderColor: 'transparent',
                "> :nth-of-type(1)": {
                    top: -circleRadius,
                    left: -circleRadius,
                    backgroundColor: color ? theme[color].hex : theme.highlight.hex,
                },
                "> :nth-of-type(2)": {
                    top: Math.sqrt(3) * (edge / 2) - circleRadius,
                    left: (edge / 2) - circleRadius,
                    backgroundColor: color ? theme[color].hex : theme.highlightSecondary.hex
                },
                "> :nth-of-type(3)": {
                    top: Math.sqrt(3) * (edge / 2) - circleRadius,
                    left: -(edge / 2) - circleRadius,
                    backgroundColor: color ? theme[color].hex : theme.highlightSecondary.hex
                }
            }
        })
    }
}