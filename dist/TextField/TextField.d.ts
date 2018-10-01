import React from 'react';
import { IconType } from '../Icon/Icon';
interface ValidateObject {
    error?: string;
    regex: RegExp;
    isMatch?: boolean;
}
export interface InputProps {
    decoration?: 'none';
    disabled?: boolean;
    type?: 'password' | 'number';
    onError?: (error: string[] | null) => void;
    onChange?: (value: string) => void;
    onClick?: (event: any) => void;
    onFocus?: (event: any) => void;
    onBlur?: (event: any) => void;
    defaultValue?: string;
    value?: string;
    placeholder?: string;
}
export interface TextAreaProps extends InputProps {
    singlerow?: boolean;
}
interface Props extends TextAreaProps {
    label?: string;
    validate?: Array<ValidateObject>;
    multiline?: boolean;
    hintIcon?: IconType;
    hint?: string;
    style?: React.CSSProperties;
    rightIcon?: IconType;
    leftIcon?: IconType;
}
declare class TextField extends React.Component<Props> {
    validate(value: string): boolean;
    onChange: (value: string) => void;
    render(): JSX.Element;
}
export default TextField;
