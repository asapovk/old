import { CSSProperties } from "react";
import { SizeTypes } from "../types";
import TextFieldTypes from '../TextField/types';

declare namespace SelectTypes {
    export interface Option {
        text: string
        value: any
    }

    export interface Props {
        style?: CSSProperties
        label?: string
        floatingLabel?: string
        disabled?: boolean
        placeholder?: string
        options: Option[]
        multiselect?: boolean
        value?: Option | Option[]
        defaultValue?: Option | Option[]
        onChange?: (value: Option | Option[]) => void
        decoration?: TextFieldTypes.Decoration
        size?: SizeTypes
        //TODO: clearable
        clearable?: boolean
        //TODO: search
        search?: boolean
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
