import { css } from '@emotion/core';
import { useTheme, useTypography } from '../../hooks';

export default () => {
    const theme = useTheme().theme;
    const typography = useTypography();

    return {
        layout: css({
            display: "flex",
            flex: "1 1 auto",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: theme.background2.hex,
            zIndex: 0
        }),

        line: css({
            display: "flex",
            flex: "1 1 auto",
            alignItems: "center",
            height: "0.25rem",
            borderRadius: "0.125rem",
            backgroundColor: theme.pale.hex
        }),

        titleRight: css({
            marginLeft: "0.5rem",
            textAlign: "right",
            ...typography.caption[1]
        }),

        titleLeft: css({
            marginRight: "0.5rem",
            textAlign: "left",
            ...typography.caption[1]
        }),

        dotsContainer: css({
            display: "flex",
            flex: "1 1 auto",
            justifyContent: "space-around",
            margin: "0 5rem",
            zIndex: 0
        }),

        dotTopText: css({
            display: "flex",
            flex: "1 1 auto",
            justifyContent: "center",
            alignItems: "center",
            height: "1.5rem",
            fontWeight: "bold",
            paddingBottom: "0.25rem",
            ...typography.display[4]
        }),

        dotBottomText: css({
            display: "flex",
            flex: "1 1 auto",
            justifyContent: "center",
            alignItems: "center",
            height: "1.25rem",
            paddingTop: "0.5rem",
            ...typography.caption[1]
        }),

        dotContainer: css({
            display: "flex",
            flex: "1 1 auto",
            justifyContent: "center",
            alignItems: "center",
            "> div": {
                boxSizing: "border-box",
                height: "22px",
                width: "22px",
                border: "4px solid",
                borderRadius: "50%",
                content: `''`,
                borderColor: theme.background2.hex,
                backgroundColor: theme.highlight.hex
            }
        })
    }
}