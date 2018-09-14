import { Component } from 'react';
interface ButtonProps {
    label?: string;
    loading?: boolean | string;
    onClick?: (MouseEvent?: any) => any;
    className?: string;
    style?: any;
    title?: string;
}
declare class Button extends Component<ButtonProps> {
    render(): JSX.Element;
}
export default Button;
