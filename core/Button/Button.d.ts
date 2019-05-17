import React from 'react';
/**
 * @deprecated Для цветов следует использовать свойство color. Decoration управляет вариациями дизайна.
 */
declare type removed = 'highlight' | 'brand-red' | 'brand-purple' | 'red' | 'green' | 'orange' | 'blue' | 'grayscale';
export interface ButtonProps {
    label?: string;
    labelCase?: 'default' | 'uppercase' | 'lowercase' | 'capitalize' | 'none';
    labelSize?: 'default' | 'small' | 'large' | 'normal';
    labelWight?: string;
    type?: 'submit';
    size?: 'default' | 'small' | 'large';
    decoration?: 'default' | 'none' | 'inverse' | 'outline' | 'blur' | removed;
    color?: 'default' | 'highlight' | 'brand-red' | 'brand-purple' | 'red' | 'green' | 'orange' | 'blue' | 'grayscale';
    loading?: boolean;
    disabled?: boolean;
    onClick?: (MouseEvent?: any) => void;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
declare const _default: (props: ButtonProps) => JSX.Element;
export default _default;
