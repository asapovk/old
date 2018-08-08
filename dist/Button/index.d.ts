import { Component } from 'react';
interface ButtonProps {
    label?: string;
}
declare class Button extends Component<ButtonProps> {
    render(): JSX.Element;
}
export default Button;
