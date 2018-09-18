import { Component } from 'react';
export interface ButtonProps {
    label?: string;
    outline?: boolean;
    decoration?: 'none' | 'accent';
    loading?: boolean;
    icon?: Component;
    labelCase?: 'upper' | 'lower' | 'capitalize' | 'sentence';
    onClick?: (MouseEvent?: any) => any;
    className?: string;
    style?: any;
}
interface ThemedButtonProps extends ButtonProps {
    theme: any;
}
declare class Button extends Component<ThemedButtonProps> {
    render(): JSX.Element;
}
export default Button;
