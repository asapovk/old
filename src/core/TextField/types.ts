import IconTypes from '../../core/Icon/types';
import { SizeTypes } from '../types';

declare namespace TextFieldTypes {
    export type Decoration = 'none' | 'borderless' | 'borderBottom'
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
        'week' |
        'decimal';

    export interface Props extends FieldProps {
        label?: string
        style?: React.CSSProperties
        rightIcon?: IconTypes.Type
        rightLabel?: string
        leftIcon?: IconTypes.Type
        loading?: true | undefined
        decoration?: Decoration
        size?: SizeTypes
        className?: string

        /**
         * Custom private props for
         * select field
         */
        _tags?: string[]
        _onTagClose?: (tagIndex: number) => void
    }

    export interface FieldProps {
        styles?: any
        singlerow?: true | undefined
        multiline?: boolean
        disabled?: boolean
        loading?: boolean
        type?: Type
        decimalCount?: number
        onChange?: (event: any, value: string) => void
        onClick?: (event: MouseEvent) => void
        onMouseDown?: (event: MouseEvent) => void
        onMouseUp?: (event: MouseEvent) => void
        onFocus?: (event: any) => void
        onBlur?: (event: any, value: string) => void
        onEnter?: (event: any) => void
        defaultValue?: string
        value?: string
        placeholder?: string
        floatingLabel?: string
        mask?: string
        tabIndex?: number
        regex?: RegExp
        disableEditing?: boolean

        /**
         * Custom private props for
         * select field
         */
        _tags?: string[]
        _onTagClose?: (tagIndex: number) => void

    }

    export interface IconProps {
        type?: IconTypes.Type,
        position: 'left' | 'right'
    }
}

export default TextFieldTypes