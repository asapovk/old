import React from 'react';
export interface ButtonProps {
    label?: string;
    outline?: true | undefined;
    decoration?: 'none' | 'highlight' | 'red' | 'green' | 'orange' | 'blue' | 'grayscale' | 'inverse' | 'outline';
    loading?: boolean;
    icon?: React.Component;
    labelCase?: 'upper' | 'lower' | 'capitalize' | 'sentence';
    onClick?: (MouseEvent?: any) => void;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    size?: 'small' | 'large';
    inversion?: boolean;
    children?: React.ReactNode;
    thin?: boolean;
    type?: 'submit';
}
declare const _default: (props: ButtonProps) => JSX.Element;
export default _default;
