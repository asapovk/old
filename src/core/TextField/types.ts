import { IconTypes } from '../types';

declare namespace TextFieldTypes {

    export interface Props extends FieldProps {
        label?: string
        style?: React.CSSProperties
        rightIcon?: IconTypes.Type
        leftIcon?: IconTypes.Type
        loading?: true | undefined
        decoration?: 'none' | 'borderless' | 'borderBottom'
        size?: 'large' | 'small' | 'extra-large'
        className?: string
    }

    export interface FieldProps {
        styles?: any
        singlerow?: true | undefined
        multiline?: boolean
        disabled?: boolean
        loading?: boolean
        type?: Type
        onChange?: (event: any, value: string) => void
        onClick?: (event: any) => void
        onFocus?: (event: any) => void
        onBlur?: (event: any) => void
        onEnter?: (event: any) => void
        defaultValue?: string
        value?: string
        placeholder?: string
        floatingLabel?: string
        mask?: string
        tabIndex?: number
        regex?: RegExp
    }

    export type Type =
        'color' |
        'email' |
        'hidden' |
        'image' |
        'month' |
        'number' |
        'password' |
        'radio' |
        'range' |
        'reset' |
        'search' |
        'submit' |
        'tel' |
        'text' |
        'time' |
        'url' |
        'week';

    export interface IconProps {
        type?: IconTypes.Type,
        position: 'left' | 'right'
    }
}

export default TextFieldTypes