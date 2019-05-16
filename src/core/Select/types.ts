import { CSSProperties } from "react";
import { SizeTypes } from "../types";
import TextFieldTypes from '../TextField/types';

declare namespace SelectTypes {
    export interface Option {
        text: string
        value: any
    }

    export interface Props {
        search?: boolean
        style?: CSSProperties
        label?: string
        floatingLabel?: string
        disabled?: boolean
        placeholder?: string
        options: Option[]
        clearable?: boolean
        multiselect?: boolean
        defaultValue?: any
        onChange?: (value: any) => void
        decoration?: TextFieldTypes.Decoration
        size?: SizeTypes
    }

    export interface SelectItemsProps {
        options: Option[]
        onSelect: (option: Option) => void
        cssItemStyle: any
    }
    export interface StyleOptions {
        disabled?: boolean
        open: boolean
    }
}

export default SelectTypes;
