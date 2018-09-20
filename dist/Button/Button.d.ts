import { Component } from 'react';
export interface Props {
    label?: string;
    outline?: boolean;
    decoration?: 'none' | 'accent';
    loading?: boolean;
    icon?: Component;
    labelCase?: 'upper' | 'lower' | 'capitalize' | 'sentence';
    onClick?: (MouseEvent?: any) => any;
    className?: string;
    style?: any;
    children?: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
