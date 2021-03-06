import { CSSProperties } from 'react';
import FlexboxTypes from '../../core/Flexbox/types';
import TextFieldTypes from '../../core/TextField/types';
import SelectTypes from '../../core/Select/types';
import ButtonTypes from '../../core/Button/types';
import CheckboxTypes from '../../core/Checkbox/types';
import DatePickerTypes from '../../extra/DatePicker/types';
export { default as Constructor } from './Constructor';
export declare type UIElement = (DefaultConstructorElement & Flexbox & FlexboxTypes.Props) | (DefaultConstructorElement & TextField & TextFieldTypes.Props) | (DefaultConstructorElement & Checkbox & CheckboxTypes.CheckboxProps) | (DefaultConstructorElement & Select & SelectTypes.Props) | (DefaultConstructorElement & Button & ButtonTypes.Props) | (DefaultConstructorElement & DatePicker & DatePickerTypes.Props) | (DefaultConstructorElement & Attachment) | (DefaultConstructorElement & Spoiler) | (DefaultConstructorElement & Divider) | (DefaultConstructorElement & Title) | (DefaultConstructorElement & Any);
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
