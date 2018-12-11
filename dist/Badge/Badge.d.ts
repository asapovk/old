import { CSSProperties, ReactNode } from 'react';
export interface ButtonProps {
    value?: string | number;
    color?: 'highlight' | 'red' | 'green' | 'orange' | 'blue';
    loading?: boolean;
    top?: number | string;
    right?: number | string;
    left?: number | string;
    onClick?: (MouseEvent?: any) => void;
    style?: CSSProperties;
    children: ReactNode;
}
declare const _default: (props: ButtonProps) => JSX.Element;
export default _default;
