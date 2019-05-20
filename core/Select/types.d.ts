import { CSSProperties } from "react";
import { SizeTypes } from "../types";
import TextFieldTypes from '../TextField/types';
declare namespace SelectTypes {
    interface Option {
        text: string;
        value: any;
    }
    interface Props {
        style?: CSSProperties;
        label?: string;
        floatingLabel?: string;
        disabled?: boolean;
        placeholder?: string;
        options: Option[];
        multiselect?: boolean;
        value?: Option | Option[];
        defaultValue?: Option | Option[];
        onChange?: (value: Option[]) => void;
        decoration?: TextFieldTypes.Decoration;
        size?: SizeTypes;
        clearable?: boolean;
        search?: boolean;
    }
    interface SelectItemsProps {
        options: Option[];
        onSelect: (option: Option) => void;
        cssItemStyle: any;
    }
    interface StyleOptions {
        disabled?: boolean;
        open: boolean;
    }
}
export default SelectTypes;
