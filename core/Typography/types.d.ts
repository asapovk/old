import { SpacingProps } from "../types";
/**
 * @deprecated Для юнитов используйте props unit
 */
declare type units = "rub" | "volume" | "power";
declare namespace TypographyTypes {
    interface Props extends HeadersProps, TextProps, CoreProps {
        type: string;
        size?: number;
        tag: string;
    }
    interface CoreProps extends SpacingProps {
        children?: React.ReactNode;
        className?: string;
        disabled?: boolean;
        onClick?: (event: any) => void;
        format?: boolean | "currency" | units;
        unit?: "rub" | "volume" | "power";
        accent?: 'red' | 'green' | 'blue' | 'orange';
        color?: "text" | "highlight" | "pale" | "textOnAccent" | "lowlight" | "light" | "highlightSecondary";
        fractionColor?: "text" | "highlight" | "pale" | "textOnAccent" | "lowlight" | "light" | "highlightSecondary";
        quotes?: boolean;
        ellipsis?: boolean;
        background?: "text" | "highlight" | "pale" | "textOnAccent" | "lowlight";
        toFixed?: number;
        align?: "left" | "right" | "center" | "justify" | "justify-all" | "start" | "end" | "match-parent" | "inherit" | "initial" | "unset";
        icon?: string;
    }
    interface HeadersProps extends CoreProps {
        underline?: boolean;
        action?: React.ReactElement<any>;
        menu?: Menu;
        value?: string;
        onChange?: (value: any) => void;
    }
    interface TextProps extends CoreProps {
        bold?: boolean;
        link?: boolean;
    }
    interface DecoratorProps extends Props {
        theme: any;
        typography: any;
    }
    interface HRProps extends SpacingProps {
        dotted?: boolean;
        width?: number;
        className?: string;
        gap?: number;
        color?: "text" | "highlight" | "pale" | "textOnAccent" | "lowlight" | "light" | "hightlightSecondary";
    }
    type Menu = {
        text: string;
        value: string;
    }[];
}
export default TypographyTypes;
