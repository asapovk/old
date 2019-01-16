import { css } from '@emotion/core';
import useTheme from '../../hooks/useTheme';

export default (checked: boolean, isRadio?: boolean, uppercase?: boolean) => {
    const theme = useTheme().theme;

    return {
        container: css({
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            color: theme.text.rgb
        }),

        input: css({
            width: "1rem",
            height: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: theme.highlight.hex,
            backgroundColor: theme.interface.hex,
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: theme.radius.default,
            borderColor: theme.pale.hex,
        }, checked && {
            borderColor: theme.highlight.rgba(0.5),
        }, isRadio && {
            borderRadius: "15px"
        }),

        label: css({
            paddingLeft: "5px",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            userSelect: "none"
        }, uppercase && {
            textTransform: "uppercase"
        }),

        circle: css({
            height: "10px",
            width: "10px",
            borderRadius: "50%",
            background: theme.highlight.hex,
        })
    }
}