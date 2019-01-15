import { css, keyframes } from '@emotion/core';
import useTheme from '../../hooks/useTheme';

export default () => {
    const theme = useTheme().theme;

    const spinnerAnimation = keyframes({
        "0%": { opacity: 1 },
        "100%": { opacity: 0 }
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
                    background: "rgb(126, 126, 126)",
                },
                "&:nth-child(1)": {
                    transform: "rotate(0deg)",
                    animationDelay: "-1.1s",
                },
                "&:nth-child(2)": {
                    transform: "rotate(30deg)",
                    animationDelay: "-1s"
                },
                "&:nth-child(3)": {
                    transform: "rotate(60deg)",
                    animationDelay: "-0.9s",
                },
                "&:nth-child(4)": {
                    transform: "rotate(90deg)",
                    animationDelay: "-0.8s",
                },
                "&:nth-child(5)": {
                    transform: "rotate(120deg)",
                    animationDelay: "-0.7s",
                },
                "&:nth-child(6)": {
                    transform: "rotate(150deg)",
                    animationDelay: "-0.6s",
                },
                "&:nth-child(7)": {
                    transform: "rotate(180deg)",
                    animationDelay: "-0.5s",
                },
                "&:nth-child(8)": {
                    transform: "rotate(210deg)",
                    animationDelay: "-0.4s"
                },
                "&:nth-child(9)": {
                    transform: "rotate(240deg)",
                    animationDelay: "-0.3s"
                },
                "&:nth-child(10)": {
                    transform: "rotate(270deg)",
                    animationDelay: "-0.2s",
                },
                "&:nth-child(11)": {
                    transform: "rotate(300deg)",
                    animationDelay: "-0.1s",
                },
                "&:nth-child(12)": {
                    transform: "rotate(330deg)",
                    animationDelay: "0s",
                }
            }
        }),

        centeredContainer: css({
            zIndex: 999999,
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            "> div": {
                position: "absolute",
                left: "50%",
                top: "50%",
                marginLeft: "-2rem",
                marginTop: "-2rem"
            }
        }),
    }
}