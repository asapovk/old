import { CSSProperties } from "react";
import { SpacingProps, ColorTypes } from '../types';
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
        onClick?: (e: MouseEvent) => void;
    }
}
export default TypographyTypes;
