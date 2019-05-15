import React from "react";
import { SpacingProps } from "../types";
declare namespace IconTypes {
    type Type = string | "add" | "more" | "pin" | "close" | "search" | "right" | "left" | "down" | "up" | "check" | "sync" | "filter" | "settings" | "chart" | "calendar" | "spin" | "smorodina" | "clock" | "card" | "counter" | "counter_gas" | "counter_water" | "counter_electricity" | "user" | "equal" | "photo" | "bell" | "water" | "tv" | "repair" | "electricity" | "insurance" | "other" | "intercom" | "garbage" | "gas" | "heat" | "minus" | "grid" | "list" | "lock" | "ruble" | "down_triangle" | "up_triangle" | "edit" | "text-right" | "arrow-left" | "star" | "star-fill" | "star-shine" | "star-shine-fill" | "circle-check" | "circle-check-fill" | "circle-cross" | "circle-cross-fill" | "crown" | "crown-fill";
    interface Props extends SpacingProps {
        style?: React.CSSProperties;
        className?: string;
        type: Type;
        onClick?: () => void;
        shape?: "cirle" | "oval";
        size?: string;
        color?: "text" | "highlight" | "pale" | "textOnAccent" | "lowlight" | "light";
        background?: string;
    }
}
export default IconTypes;
