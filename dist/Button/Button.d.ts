import { Component } from 'react';
interface ButtonProps {
    label?: string;
    outline?: boolean;
    decoration?: 'none' | 'accent';
    loading?: boolean;
    icon?: Component;
    labelCase?: 'upper' | 'lower' | 'capitalize' | 'sentence';
    onClick?: (MouseEvent?: any) => any;
    className?: string;
}
declare class Button extends Component<ButtonProps> {
    render(): JSX.Element;
}
export default Button;
