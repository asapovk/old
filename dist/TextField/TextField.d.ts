import React from 'react';
import { IconType } from '../Icon/Icon';
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
    rightIcon?: IconType;
    leftIcon?: IconType;
    onError?: (error: string[] | null) => void;
    onChange?: (value: string) => void;
    onClick?: (event: any) => void;
    onFocus?: (event: any) => void;
    onBlur?: (event: any) => void;
    children?: any;
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
