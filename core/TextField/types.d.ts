import IconTypes from '../../core/Icon/types';
import { SizeTypes } from '../types';
declare namespace TextFieldTypes {
    type Autocomplete = "off" | "on" | "name" | "given-name" | "additional-name" | "family-name" | "honorific-suffix" | "nickname" | "email" | "username" | "new-password" | "current-password" | "one-time-code" | "organization-title" | "organization" | "street-address" | "address-line1" | "address-line2" | "address-line3" | "address-level4" | "address-level3" | "address-level2" | "address-level1" | "country" | "country-name" | "postal-code" | "cc-name" | "cc-given-name" | "cc-additional-name" | "cc-family-name" | "cc-number" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-csc" | "cc-type" | "transaction-currency" | "transaction-amount" | "language" | "bday" | "bday-day" | "bday-month" | "bday-year" | "sex" | "tel" | "tel-country-code" | "tel-national" | "tel-area-code" | "tel-local" | "tel-local-prefix" | "tel-extension" | "impp" | "url" | "photo";
    type Decoration = 'none' | 'borderless' | 'borderBottom';
    type Type = 'color' | 'email' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | 'decimal';
    interface Props extends FieldProps {
        label?: string;
        style?: React.CSSProperties;
        rightIcon?: IconTypes.Type;
        rightLabel?: string;
        leftIcon?: IconTypes.Type;
        loading?: true | undefined;
        decoration?: Decoration;
        size?: SizeTypes;
        className?: string;
        /**
         * Custom private props for
         * select field
         */
        _tags?: string[];
        _onTagClose?: (tagIndex: number) => void;
    }
    interface FieldProps {
        styles?: any;
        singlerow?: true | undefined;
        multiline?: boolean;
        disabled?: boolean;
        loading?: boolean;
        type?: Type;
        decimalCount?: number;
        onChange?: (event: any, value: string) => void;
        onClick?: (event: MouseEvent) => void;
        onMouseDown?: (event: MouseEvent) => void;
        onMouseUp?: (event: MouseEvent) => void;
        onFocus?: (event: any) => void;
        onBlur?: (event: any, value: string) => void;
        onEnter?: (event: any) => void;
        defaultValue?: string;
        value?: string;
        placeholder?: string;
        floatingLabel?: string;
        mask?: string;
        tabIndex?: number;
        regex?: RegExp;
        disableEditing?: boolean;
        autoComplete?: Autocomplete;
        /**
         * Custom private props for
         * select field
         */
        _tags?: string[];
        _onTagClose?: (tagIndex: number) => void;
    }
    interface IconProps {
        type?: IconTypes.Type;
        position: 'left' | 'right';
    }
}
export default TextFieldTypes;
