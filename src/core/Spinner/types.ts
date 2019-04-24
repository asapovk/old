import { CSSProperties } from "react";

declare namespace SpinnerTypes {
    export interface ISpinner {
        spinning?: boolean
        center?: boolean
        dark?: boolean
        children?: any
        style?: CSSProperties
        className?: string
        defaultElement?: boolean
        loadingText?: string
        color?:
        | "text"
        | "highlight"
        | "pale"
        | "textOnAccent"
        | "lowlight"
        | "light"
        | "highlightSecondary";
    }
}

export default SpinnerTypes;