import { CSSProperties, Children } from 'react';
import {
    TextFieldTypes,
    FlexboxTypes,
    DatePickerTypes,
    CheckboxTypes
} from '../../core/types';

export { default as Constructor } from './Constructor';
import { ButtonProps } from '../../core/Button/Button';
import { SelectProps } from '../../core/Select/Select';

export type UIElement =
    (DefaultConstructorElement & Flexbox & FlexboxTypes.Props)
    | (DefaultConstructorElement & TextField & TextFieldTypes.Props)
    | (DefaultConstructorElement & Checkbox & CheckboxTypes.CheckboxProps)
    | (DefaultConstructorElement & Select & SelectProps)
    | (DefaultConstructorElement & Button & ButtonProps)
    | (DefaultConstructorElement & DatePicker & DatePickerTypes.Props)
    | (DefaultConstructorElement & Attachment)
    | (DefaultConstructorElement & Spoiler)
    | (DefaultConstructorElement & Divider)
    | (DefaultConstructorElement & Title)
    | (DefaultConstructorElement & Any)

export type UIElements = UIElement[]

interface Flexbox { $: "flex" | "flexbox", $children?: UIElement | UIElements }
interface TextField { $: "textfield" }
interface Checkbox { $: "checkbox" }
interface Select { $: "selectfield" | "select" }
interface Button { $: "button" }
interface DatePicker { $: "datepicker" }
interface Attachment { $: "attachment", maxSize?: number }
interface Spoiler { $: "spoiler", label: string, invertVisible?: boolean, $children: UIElement | UIElements }
interface Divider { $: "divider" }
interface Title { $: "title", text: string }
interface Any { $: "any", children?: any }

interface ConditionsKeyValue {
    [key: string]: any
}

interface DefaultConstructorElement {
    $id?: string
    style?: CSSProperties
    required?: boolean
    payload?: any
    $connect?: string[]
    $conditions?: {
        visible?: {
            if?: ConditionsKeyValue[],
            ifnot?: ConditionsKeyValue[]
        }
    },
}