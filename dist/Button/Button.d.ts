import { Component, CSSProperties } from 'react';
export interface Props {
    label?: string;
    outline?: true | undefined;
    decoration?: 'none' | 'highlight' | 'red' | 'green' | 'orange' | 'blue';
    loading?: boolean;
    icon?: Component;
    labelCase?: 'upper' | 'lower' | 'capitalize' | 'sentence';
    onClick?: (MouseEvent?: any) => void;
    className?: string;
    style?: CSSProperties;
}
declare class Button extends Component<Props> {
    render(): JSX.Element;
}
export default Button;
