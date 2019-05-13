import { SizeTypes } from "../types";

declare namespace CheckboxTypes {
    export type LabelColor = | "text"
        | "highlight"
        | "pale"
        | "textOnAccent"
        | "lowlight"
        | "light"
        | "highlightSecondary";
    export interface CheckboxProps {
        label?: string
        labelColor?: LabelColor
        radio?: boolean
        checked?: boolean
        onChange?: (checked) => void
        style?: any
        defaultValue?: boolean
        uppercase?: boolean
        className?: string
        size?: SizeTypes
    }

    export interface Checkbox {
        checked: boolean
    }
}

export default CheckboxTypes;