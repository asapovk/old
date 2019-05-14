import { css } from "@emotion/core";
import { useTheme } from "../../hooks";
import Types from "./types";

export default (position?: Types.Position) => {
  const theme = useTheme().theme;

  return {
    popup: css({
      display: "none",
      position: "absolute",
      top: "calc(100% + .5rem)",
      right: 0,
      // transform: "translateX(-50%)",

      background: theme.interface.rgb,
      borderColor: theme.borders.button.borderColor,
      borderRadius: theme.borders.button.borderRadius,
      borderStyle: theme.borders.button.borderStyle,
      borderWidth: theme.borders.button.borderWidth,
      boxShadow: `0px 2px 4px 0px ${theme.defaultShadow.rgb}`,
      padding: "0.5rem 1rem",
      color: theme.text.rgb,

      pointerEvents: "none",
      transition: "all .2s ease-in-out"
    })
  };
};
