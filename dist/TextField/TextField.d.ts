import React from 'react';
interface ValidateObject {
    error?: string;
    regex: RegExp;
    isMatch?: boolean;
}
interface TextFieldProps {
    theme?: any;
    label?: string;
    validate?: Array<ValidateObject>;
    defaultValue?: string;
    value?: string;
    style?: React.CSSProperties;
    className?: any;
    multiline?: boolean;
    singlerow?: boolean;
    decoration?: 'none';
    disabled?: boolean;
    type?: 'password' | 'number';
    onError?: (error: string[] | null) => void;
    onChange?: (value: string) => void;
}
declare class UITextField extends React.Component<TextFieldProps> {
    validate(value: string): boolean;
    onChange(value: string): void;
    render(): JSX.Element;
}
export default UITextField;
