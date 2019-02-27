import React from 'react';
/**
 * @deprecated Для цветов следует использовать свойство color. Decoration управляет вариациями дизайна.
 */
declare type removed = 'highlight' | 'red' | 'green' | 'orange' | 'blue' | 'grayscale';
export interface ButtonProps {
    label?: string;
    labelCase?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
    labelSize?: 'small' | 'large' | 'normal';
    labelWight?: string;
    type?: 'submit';
    size?: 'small' | 'large';
    decoration?: 'none' | 'inverse' | 'outline' | removed;
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
