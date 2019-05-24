import React from "react";
import { SpacingProps } from "../types";
declare namespace IconTypes {
    type Type = "add" | "more" | "pin" | "close" | "search" | "right" | "left" | "down" | "up" | "check" | "sync" | "filter" | "settings" | "chart" | "calendar" | "spin" | "smorodina" | "clock" | "card" | "counter" | "counter_gas" | "counter_water" | "counter_electricity" | "user" | "equal" | "photo" | "bell" | "water" | "tv" | "repair" | "electricity" | "insurance" | "other" | "intercom" | "garbage" | "gas" | "heat" | "minus" | "grid" | "list" | "lock" | "ruble" | "down_triangle" | "up_triangle" | "edit" | "text-right" | "arrow-left" | "star" | "star-fill" | "star-shine" | "star-shine-fill" | "circle-check" | "circle-check-fill" | "circle-cross" | "circle-cross-fill" | "crown" | "crown-fill" | "zoom-in" | "zoom-out" | "rotate-left" | "rotate-right";
    type Shapes = "cirle" | "oval";
    type Color = "text" | "highlight" | "pale" | "textOnAccent" | "lowlight" | "light";
    interface Props extends SpacingProps {
        style?: React.CSSProperties;
        className?: string;
        type: Type;
        onClick?: (e: MouseEvent) => void;
        shape?: Shapes;
        shapeOnHover?: boolean;
        hoverColor?: Color;
        size?: string;
        color?: Color;
        background?: string;
    }
}
export default IconTypes;
