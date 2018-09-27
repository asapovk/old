import { Component } from 'react';
export interface Props {
    label?: string;
    outline?: boolean;
    decoration?: 'none' | 'highlight' | 'red' | 'green' | 'orange' | 'blue';
    loading?: boolean;
    icon?: Component;
    labelCase?: 'upper' | 'lower' | 'capitalize' | 'sentence';
    onClick?: (MouseEvent?: any) => any;
    className?: string;
    style?: any;
    children?: any;
}
declare class Button extends Component<Props> {
    render(): JSX.Element;
}
export default Button;
