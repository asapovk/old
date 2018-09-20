import React from 'react';
interface ValidateObject {
    error?: string;
    regex: RegExp;
    isMatch?: boolean;
}
interface Props {
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
    children?: any;
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
