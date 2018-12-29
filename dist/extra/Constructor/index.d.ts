import { CSSProperties } from 'react';
export { default as Constructor } from './Constructor';
import { FlexboxProps } from '../../core/Flexbox/Flexbox';
import { ButtonProps } from '../../core/Button/Button';
import { TextFieldTypes } from '../../core/types';
import { SelectProps } from '../../core/Select/Select';
import { CheckboxProps } from '../../core/Checkbox/Checkbox';
import { DatePickerProps } from '../../core/DatePicker/DatePicker';
export declare type UIElement = (DefaultConstructorElement & Flexbox & FlexboxProps) | (DefaultConstructorElement & TextField & TextFieldTypes.Props) | (DefaultConstructorElement & Checkbox & CheckboxProps) | (DefaultConstructorElement & Select & SelectProps) | (DefaultConstructorElement & Button & ButtonProps) | (DefaultConstructorElement & DatePicker & DatePickerProps) | (DefaultConstructorElement & Attachment) | (DefaultConstructorElement & Spoiler) | (DefaultConstructorElement & Divider) | (DefaultConstructorElement & Title) | (DefaultConstructorElement & Any);
export declare type UIElements = UIElement[];
interface Flexbox {
    $: "flex" | "flexbox";
    $children?: UIElement | UIElements;
}
interface TextField {
    $: "textfield";
}
interface Checkbox {
    $: "checkbox";
}
interface Select {
    $: "selectfield" | "select";
}
interface Button {
    $: "button";
}
interface DatePicker {
    $: "datepicker";
}
interface Attachment {
    $: "attachment";
    maxSize?: number;
}
interface Spoiler {
    $: "spoiler";
    label: string;
    invertVisible?: boolean;
    $children: UIElement | UIElements;
}
interface Divider {
    $: "divider";
}
interface Title {
    $: "title";
    text: string;
}
interface Any {
    $: "any";
    children?: any;
}
interface ConditionsKeyValue {
    [key: string]: any;
}
interface DefaultConstructorElement {
    $id?: string;
    style?: CSSProperties;
    required?: boolean;
    payload?: any;
    $connect?: string[];
    $conditions?: {
        visible?: {
            if?: ConditionsKeyValue[];
            ifnot?: ConditionsKeyValue[];
        };
    };
}
