import { Component, CSSProperties } from 'react';
export interface ButtonProps {
    value?: string | number;
    color?: 'highlight' | 'red' | 'green' | 'orange' | 'blue';
    loading?: boolean;
    top?: number | string;
    right?: number | string;
    left?: number | string;
    onClick?: (MouseEvent?: any) => void;
    style?: CSSProperties;
}
declare class Badge extends Component<ButtonProps> {
    render(): JSX.Element;
}
export default Badge;
