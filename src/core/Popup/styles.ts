import { css } from "@emotion/core";
import { useTheme } from "../../hooks";
import Types from "./types";

export default (position?: Types.Position) => {
  const theme = useTheme().theme;

  return {
    popup: css({
      position: "fixed",

      background: theme.interface.rgb,
      borderColor: theme.borders.button.borderColor,
      borderRadius: theme.borders.button.borderRadius,
      borderStyle: theme.borders.button.borderStyle,
      borderWidth: theme.borders.button.borderWidth,
      boxShadow: theme.shadows.button.default,
      color: theme.text.rgb
    })
  };
};
