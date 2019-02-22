import React from 'react';
export interface ButtonProps {
    label?: string;
    labelCase?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
    labelSize?: 'small' | 'large' | 'normal';
    labelWight?: string;
    type?: 'submit';
    size?: 'small' | 'large';
    decoration?: 'none' | 'inverse' | 'outline';
    color?: 'highlight' | 'red' | 'green' | 'orange' | 'blue' | 'grayscale';
    loading?: boolean;
    disabled?: boolean;
    onClick?: (MouseEvent?: any) => void;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
declare const _default: (props: ButtonProps) => JSX.Element;
export default _default;
