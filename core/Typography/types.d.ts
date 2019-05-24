import { CSSProperties } from "react";
import { SpacingProps, ColorTypes, AccentTypes } from '../types';
declare namespace TypographyTypes {
    type Align = 'right' | 'left' | 'center';
    interface Props extends TextProps {
        type: string;
        tag: string;
        size?: number;
    }
    interface TextProps extends SpacingProps {
        bold?: boolean;
        quotes?: boolean;
        link?: boolean;
        ellipsis?: boolean;
        underline?: boolean;
        align?: Align;
        className?: string;
        children?: string | any;
        style?: CSSProperties;
        color?: ColorTypes;
        accent?: AccentTypes;
        onClick?: (e: MouseEvent) => void;
    }
}
export default TypographyTypes;
