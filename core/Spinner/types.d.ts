import { CSSProperties } from "react";
declare namespace SpinnerTypes {
    interface ISpinner {
        spinning?: boolean;
        center?: boolean;
        dark?: boolean;
        children?: any;
        style?: CSSProperties;
        className?: string;
        type?: 'default' | 'smorodina';
        loadingText?: string;
        color?: "text" | "highlight" | "pale" | "textOnAccent" | "lowlight" | "light" | "highlightSecondary";
    }
}
export default SpinnerTypes;
