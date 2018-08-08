import { Component } from 'react';
interface ButtonProps {
    label?: string;
    outline?: boolean;
    decoration?: 'none' | 'accent';
    loading?: boolean;
    icon?: Component;
    case?: 'upper' | 'lower' | 'capitalize' | 'sentence';
}
declare class Button extends Component<ButtonProps> {
    render(): JSX.Element;
}
export default Button;
