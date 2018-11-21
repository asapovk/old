import { Component, CSSProperties } from 'react';
export interface ButtonProps {
    label?: string;
    outline?: true | undefined;
    decoration?: 'none' | 'highlight' | 'red' | 'green' | 'orange' | 'blue' | 'grayscale';
    loading?: boolean;
    icon?: Component;
    labelCase?: 'upper' | 'lower' | 'capitalize' | 'sentence';
    onClick?: (MouseEvent?: any) => void;
    className?: string;
    style?: CSSProperties;
    disabled?: boolean;
    size?: 'small' | 'large';
}
declare class Button extends Component<ButtonProps> {
    onClick(): void;
    render(): JSX.Element;
}
export default Button;
