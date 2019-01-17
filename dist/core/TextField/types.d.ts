import { IconTypes } from '../types';
declare namespace TextFieldTypes {
    interface Props extends FieldProps {
        label?: string;
        style?: React.CSSProperties;
        rightIcon?: IconTypes.Type;
        leftIcon?: IconTypes.Type;
        loading?: true | undefined;
        decoration?: 'none' | 'borderless';
        size?: 'large' | 'small';
    }
    interface FieldProps {
        styles?: any;
        singlerow?: true | undefined;
        multiline?: boolean;
        disabled?: boolean;
        type?: Type;
        onChange?: (event: any) => void;
        onClick?: (event: any) => void;
        onFocus?: (event: any) => void;
        onBlur?: (event: any) => void;
        onEnter?: (event: any) => void;
        defaultValue?: string;
        value?: string;
        placeholder?: string;
    }
    type Type = 'password' | 'number';
    interface IconProps {
        type?: IconTypes.Type;
        position: 'left' | 'right';
    }
}
export default TextFieldTypes;
