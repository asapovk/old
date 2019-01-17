import { SizeTypes } from "../types";
declare namespace CheckboxTypes {
    interface CheckboxProps {
        label?: string;
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
