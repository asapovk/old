import { SizeTypes } from "../types";
declare namespace CheckboxTypes {
    type LabelColor = "text" | "highlight" | "pale" | "textOnAccent" | "lowlight" | "light" | "highlightSecondary";
    interface CheckboxProps {
        label?: string;
        labelColor?: LabelColor;
        radio?: boolean;
        checked?: boolean;
        onChange?: (checked: any) => void;
        style?: any;
        defaultValue?: boolean;
        uppercase?: boolean;
        className?: string;
        size?: SizeTypes;
    }
    interface Checkbox {
        checked: boolean;
    }
}
export default CheckboxTypes;
